"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/moisestech/15-minute-meeting";

function useUtmUrl(baseUrl: string): string {
  const [url, setUrl] = useState(baseUrl);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const utm = ["utm_source", "utm_campaign", "utm_medium", "utm_content", "utm_term"];
    const u = new URLSearchParams();
    utm.forEach((k) => {
      const v = params.get(k);
      if (v) u.set(k, v);
    });
    const qs = u.toString();
    setUrl(qs ? `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}${qs}` : baseUrl);
  }, [baseUrl]);
  return url;
}

export default function ContactSupportClient() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calendlyUrl = useUtmUrl(CALENDLY_URL);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const params = new URLSearchParams(
        typeof window !== "undefined" ? window.location.search : ""
      );
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          utm_source: params.get("utm_source"),
          utm_campaign: params.get("utm_campaign"),
          utm_medium: params.get("utm_medium"),
          utm_content: params.get("utm_content"),
          utm_term: params.get("utm_term"),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
        <Link
          href="/"
          className="inline-flex items-center text-white/60 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Contact & Support</h1>
          <p className="text-white/70 text-lg mb-8">
            Schedule a discovery call or send a message.
          </p>

          {/* Calendly CTA - prominent */}
          <div className="mb-10 p-6 rounded-xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-semibold mb-2">Schedule a discovery call</h2>
            <p className="text-white/70 text-sm mb-4">
              15-minute meet & greet for institutions, partnerships, and consulting.
            </p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-medium hover:opacity-90 transition-opacity min-h-[44px]"
            >
              <Calendar className="w-5 h-5" />
              Book on Calendly
            </a>
          </div>

          {/* Contact form */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-semibold mb-2">Or send a message</h2>
            <p className="text-white/70 text-sm mb-6">
              Have a question? Fill out the form and we&apos;ll get back to you.
            </p>

            {submitted ? (
              <div className="py-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <p className="text-green-400 font-medium">Message sent!</p>
                <p className="text-white/60 text-sm mt-1">
                  We&apos;ll be in touch soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-purple-400 hover:text-purple-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-black/30 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[44px]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-black/30 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[44px]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg bg-black/30 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 min-h-[44px]"
                >
                  {loading ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>

          <p className="mt-8 text-center text-white/50 text-sm">
            <Mail className="w-4 h-4 inline mr-1 -mt-0.5" />
            <a href="mailto:m@moises.tech" className="hover:text-white">
              m@moises.tech
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
