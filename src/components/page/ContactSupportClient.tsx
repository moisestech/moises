"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

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

const visitButtonClasses =
  "inline-flex items-center justify-center gap-2 font-['MoMA_Sans'] font-bold transition-transform transition-shadow duration-200 shadow-md hover:scale-[1.02] hover:shadow-[0_0_24px_4px_rgba(34,211,238,0.4)] focus:scale-[1.02] focus:shadow-[0_0_24px_4px_rgba(34,211,238,0.4)] relative overflow-hidden group text-black px-6 py-2.5 min-h-[44px]";

export default function ContactSupportClient() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calendlyUrl = useUtmUrl(CALENDLY_URL);
  const isDark = theme === "dark";

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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16 pt-24 sm:pt-28">
        <Link
          href="/"
          className={`inline-flex items-center text-sm mb-8 transition-colors ${
            isDark ? "text-white/60 hover:text-white" : "text-gray-500 hover:text-black"
          }`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-['MoMA_Sans']"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Contact & Support</h1>
          <p
            className={`text-lg mb-8 ${
              isDark ? "text-white/70" : "text-gray-600"
            }`}
          >
            Schedule a discovery call or send a message.
          </p>

          {/* Calendly CTA */}
          <div
            className={`mb-10 p-6 rounded-xl border ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <h2 className="text-lg font-semibold mb-2">Schedule a discovery call</h2>
            <p
              className={`text-sm mb-4 ${
                isDark ? "text-white/70" : "text-gray-600"
              }`}
            >
              15-minute meet & greet for institutions, partnerships, and consulting.
            </p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${visitButtonClasses}`}
              style={{
                background: "linear-gradient(90deg, #22d3ee 0%, #67e8f9 100%)",
              }}
            >
              <Calendar className="w-5 h-5" />
              Book on Calendly
            </a>
          </div>

          {/* Contact form */}
          <div
            className={`p-6 rounded-xl border ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <h2 className="text-lg font-semibold mb-2">Or send a message</h2>
            <p
              className={`text-sm mb-6 ${
                isDark ? "text-white/70" : "text-gray-600"
              }`}
            >
              Have a question? Fill out the form and we&apos;ll get back to you.
            </p>

            {submitted ? (
              <div className="py-6 text-center">
                <CheckCircle className="w-12 h-12 text-cyan-500 mx-auto mb-3" />
                <p className="text-cyan-600 dark:text-cyan-400 font-medium">Message sent!</p>
                <p
                  className={`text-sm mt-1 ${
                    isDark ? "text-white/60" : "text-gray-500"
                  }`}
                >
                  We&apos;ll be in touch soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-1 ${
                      isDark ? "text-white/80" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[44px] transition-colors ${
                      isDark
                        ? "bg-black/30 border-white/20 text-white placeholder:text-white/50"
                        : "bg-white border-gray-300 text-black placeholder:text-gray-400"
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-1 ${
                      isDark ? "text-white/80" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[44px] transition-colors ${
                      isDark
                        ? "bg-black/30 border-white/20 text-white placeholder:text-white/50"
                        : "bg-white border-gray-300 text-black placeholder:text-gray-400"
                    }`}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-1 ${
                      isDark ? "text-white/80" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none transition-colors ${
                      isDark
                        ? "bg-black/30 border-white/20 text-white placeholder:text-white/50"
                        : "bg-white border-gray-300 text-black placeholder:text-gray-400"
                    }`}
                    placeholder="How can we help?"
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${visitButtonClasses} disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
                  style={{
                    background: "linear-gradient(90deg, #22d3ee 0%, #67e8f9 100%)",
                  }}
                >
                  {loading ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>

          <p
            className={`mt-8 text-center text-sm ${
              isDark ? "text-white/50" : "text-gray-500"
            }`}
          >
            <Mail className="w-4 h-4 inline mr-1 -mt-0.5" />
            <a
              href="mailto:m@moises.tech"
              className={isDark ? "hover:text-white" : "hover:text-black"}
            >
              m@moises.tech
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
