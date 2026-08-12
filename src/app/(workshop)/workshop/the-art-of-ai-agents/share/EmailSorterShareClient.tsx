'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Copy, Check, ExternalLink, ArrowLeft, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  ART_OF_AI_AGENTS_EMAIL_INBOX_DIAGRAM,
  ART_OF_AI_AGENTS_SCREENSHOTS,
  ART_OF_AI_AGENTS_WORKSHOP_HREF,
  N8N_LOGO,
} from '@/constants/art-of-ai-agents';

const SLIDES_URL =
  'https://www.canva.com/design/DAG8XUDbk08/WLDVoo18PxMVv9kem2jPxw/view?utm_content=DAG8XUDbk08&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hea00d41ad3';

const PROMPT_FIELD = `Topic: {{ $json.subject }}
Description: {{ $json.text }}
Sender: {{ $json.from.text }}`;

const SYSTEM_MESSAGE = `** role **
You are an email assistant for a working artist. Your job is to reduce inbox stress by assigning ONE clear label to each incoming email.

** categories (return exactly one of these, lowercase) **
- curator: curator outreach, exhibition invitations, studio visit requests, institutional art contacts, programming inquiries
- gallery: gallery outreach, exhibition opportunities, sales-related communication, commercial or independent gallery messages
- residency: artist residencies, studio programs, fellowship programs, applications, acceptances, residency-related logistics
- grant: grants, open calls, funding opportunities, awards, application deadlines, sponsorship opportunities
- newsletter: mailing lists, Substack, event blasts, platform updates, general announcements, non-urgent updates
- admin: invoices, payments, receipts, shipping, taxes, contracts, paperwork, scheduling, insurance, W-9s, logistical follow-ups
- personal: friends, family, and personal messages not related to work
- spam: suspicious, promotional junk, scams, or irrelevant cold outreach

** rules **
- Read the subject, body, and sender.
- Pick the single best category.
- If unsure, return "newsletter" (default safe bucket).
- Do not invent new labels.

** output format (json only) **
{ "email_label": "curator" }`;

const GMAIL_LABELS = `curator
gallery
residency
grant
newsletter
admin
personal
spam`;

function CopyBlock({
  label,
  description,
  content,
  copiedId,
  onCopy,
  blockId,
}: {
  label: string;
  description: string;
  content: string;
  copiedId: string | null;
  onCopy: (id: string) => void;
  blockId: string;
}) {
  const [plainText, setPlainText] = useState(false);
  const isCopied = copiedId === blockId;

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 overflow-hidden mb-6 backdrop-blur-sm">
      <div className="px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="font-semibold text-white text-sm">{label}</h3>
          <p className="text-white/60 text-xs mt-0.5">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPlainText(!plainText)}
            className="text-xs text-white/60 hover:text-white transition-colors"
          >
            {plainText ? 'View as code' : 'View as plain text'}
          </button>
          <button
            onClick={() => onCopy(blockId)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#7f5af0] hover:bg-[#8b6cf7] text-white text-xs font-medium transition-colors"
          >
            {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <pre
        className={`p-4 text-xs sm:text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap font-mono text-white/90 ${
          plainText ? 'bg-transparent' : ''
        }`}
      >
        {content}
      </pre>
    </div>
  );
}

export default function EmailSorterShareClient() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = content;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#e0e0e0]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7f5af0 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #ff6ac1 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 py-12 sm:py-16 pt-20">
        <Link
          href={ART_OF_AI_AGENTS_WORKSHOP_HREF}
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to workshop
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <a
              href={N8N_LOGO.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 transition hover:border-[#ea4b71]/40 hover:bg-white/10"
              aria-label="n8n"
            >
              <Image src={N8N_LOGO.src} alt={N8N_LOGO.alt} width={28} height={28} className="h-7 w-7" unoptimized />
            </a>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Built in n8n</p>
          </div>

          <h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{
              background: 'linear-gradient(135deg, #7f5af0 0%, #ff6ac1 50%, #42d392 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Email Inbox Organizer
          </h1>
          <p className="text-white/70 text-sm sm:text-base mb-8">
            Locust workshop handout — copy each block into n8n. Scan the QR from the slide to get here.
          </p>

          <div className="mb-10 space-y-4">
            <figure className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <div className="relative aspect-[16/10] bg-black/60">
                <Image
                  src={ART_OF_AI_AGENTS_EMAIL_INBOX_DIAGRAM.src}
                  alt={ART_OF_AI_AGENTS_EMAIL_INBOX_DIAGRAM.alt}
                  fill
                  priority
                  className="object-contain object-center p-2 sm:p-3"
                  sizes="(max-width: 672px) 100vw, 672px"
                />
              </div>
              <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-white/60 sm:text-sm">
                {ART_OF_AI_AGENTS_EMAIL_INBOX_DIAGRAM.caption}
              </figcaption>
            </figure>

            <div className="grid gap-4 sm:grid-cols-2">
              {ART_OF_AI_AGENTS_SCREENSHOTS.filter((s) => s.id !== 'email-inbox-organizer-diagram').map((shot) => (
                <figure
                  key={shot.id}
                  className="overflow-hidden rounded-xl border border-white/10 bg-black/40"
                >
                  <div className="relative aspect-[16/10] bg-black/60">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                  </div>
                  <figcaption className="border-t border-white/10 px-3 py-2.5 text-[11px] leading-snug text-white/55 sm:text-xs">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <CopyBlock
            blockId="prompt"
            label="Block A — Prompt field"
            description="Paste this in the n8n node that sends the email data TO the AI (e.g. Set node or the message input). Uses n8n expressions to pass subject, body, sender."
            content={PROMPT_FIELD}
            copiedId={copiedId}
            onCopy={(id) => handleCopy(id, PROMPT_FIELD)}
          />

          <CopyBlock
            blockId="system"
            label="Block B — System message"
            description="Paste this in the AI Agent node's System Message field. This defines the assistant's role and categories."
            content={SYSTEM_MESSAGE}
            copiedId={copiedId}
            onCopy={(id) => handleCopy(id, SYSTEM_MESSAGE)}
          />

          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 overflow-hidden mb-8 backdrop-blur-sm">
            <div className="px-4 py-3 border-b border-amber-500/20 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="font-semibold text-white text-sm">Gmail labels</h3>
                <p className="text-amber-400/90 text-xs mt-0.5">
                  Create these labels in Gmail exactly as shown (lowercase). Your Switch/filter outputs must match.
                </p>
              </div>
              <button
                onClick={() => handleCopy('gmail', GMAIL_LABELS)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#7f5af0] hover:bg-[#8b6cf7] text-white text-xs font-medium transition-colors"
              >
                {copiedId === 'gmail' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedId === 'gmail' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="p-4 text-xs sm:text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap font-mono text-white/90">
              {GMAIL_LABELS}
            </pre>
            <p className="px-4 pb-4 text-amber-400/80 text-xs">
              ⚠️ If your Gmail label differs from the AI output (e.g. Admin vs admin), routing breaks. Match exactly.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 mb-12 backdrop-blur-sm hover:border-[#7f5af0]/30 transition-colors">
            <h2 className="text-lg font-semibold mb-2">Workshop slides</h2>
            <p className="text-white/70 text-sm mb-4">Follow along with the full presentation.</p>
            <a
              href={SLIDES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#42d392] hover:text-[#67e8f9] font-medium transition-colors"
            >
              Open slides on Canva
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 mb-12 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7f5af0]/30 to-[#ff6ac1]/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Image
                  src="https://ui-avatars.com/api/?name=Fabiola+Larios&background=7f5af0&color=fff&size=128"
                  alt="Fabiola Larios"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">360 Experiences</h2>
                <p className="text-white/70 text-sm mb-1">
                  Immersive 360° photo captures of exhibitions and studios.
                </p>
                <p className="text-[#7f5af0] text-sm font-medium">
                  Fabiola Larios — Director of Digital at Oolite Arts, 360 Lead
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-center mb-8">About us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden mb-4">
                  <Image
                    src="https://ui-avatars.com/api/?name=Moises+Sanabria&background=7f5af0&color=fff&size=128"
                    alt="Moises Sanabria"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">Moises Sanabria</h3>
                <p className="text-white/70 text-sm mb-3">
                  Technical Director of Digital at Oolite Arts. Builds automation tools.
                </p>
                <a
                  href="https://instagram.com/moisesdsanabria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#7f5af0] hover:text-[#8b6cf7] text-sm transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @moisesdsanabria
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden mb-4">
                  <Image
                    src="https://ui-avatars.com/api/?name=Fabiola+Larios&background=ff6ac1&color=fff&size=128"
                    alt="Fabiola Larios"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">Fabiola Larios</h3>
                <p className="text-white/70 text-sm mb-3">
                  Director of Digital at Oolite Arts. SEO & digital presence workshops. 360 Lead.
                </p>
                <a
                  href="https://instagram.com/fabiolalariosm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#7f5af0] hover:text-[#8b6cf7] text-sm transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @fabiolalariosm
                </a>
              </div>
            </div>
            <p className="text-center text-white/50 text-xs mt-6">Follow us on IG</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
