import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase";

/**
 * Lead capture API for workshop waitlist.
 * Stores in Supabase when configured; falls back to console if not.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body?.email?.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const referrer =
      typeof request.headers.get("referer") === "string"
        ? request.headers.get("referer")
        : undefined;

    const row = {
      email,
      source: body.source ?? "talk_hub",
      utm_source: body.utm_source ?? null,
      utm_medium: body.utm_medium ?? null,
      utm_campaign: body.utm_campaign ?? null,
      utm_content: body.utm_content ?? null,
      utm_term: body.utm_term ?? null,
      referrer: referrer ?? null,
      context: body.context ?? null,
    };

    const supabase = createSupabaseAdmin();
    if (supabase) {
      const { error } = await supabase.from("leads").insert(row);
      if (error) {
        console.error("[API /lead] Supabase insert error:", error);
        return NextResponse.json(
          { error: "Failed to save lead" },
          { status: 500 }
        );
      }
    } else {
      console.log("[API /lead] New lead (no Supabase):", JSON.stringify(row));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[API /lead] Error:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
