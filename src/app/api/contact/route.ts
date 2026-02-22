import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase";

/**
 * Contact form API. Stores in Supabase leads table with source: 'contact'.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body?.email?.trim();
    const name = body?.name?.trim();
    const message = body?.message?.trim();

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
      source: "contact",
      utm_source: body.utm_source ?? null,
      utm_medium: body.utm_medium ?? null,
      utm_campaign: body.utm_campaign ?? null,
      utm_content: body.utm_content ?? null,
      utm_term: body.utm_term ?? null,
      referrer: referrer ?? null,
      context: { name: name || null, message: message || null },
    };

    const supabase = createSupabaseAdmin();
    if (supabase) {
      const { error } = await supabase.from("leads").insert(row);
      if (error) {
        console.error("[API /contact] Supabase insert error:", error);
        return NextResponse.json(
          { error: "Failed to send message" },
          { status: 500 }
        );
      }
    } else {
      console.log("[API /contact] New contact (no Supabase):", JSON.stringify(row));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[API /contact] Error:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
