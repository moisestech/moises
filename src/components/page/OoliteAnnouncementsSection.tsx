"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { ooliteTranslations } from "@/translations/oolite/index";
import {
  ooliteAnnouncements,
  type OoliteAnnouncement,
} from "@/constants/oolite-announcements";

interface OoliteAnnouncementsSectionProps {
  /** Limit number of announcements to show. Omit for full list. */
  limit?: number;
  /** Show "View All" link when limit is set */
  showViewAll?: boolean;
  /** Compact card layout for overview page */
  compact?: boolean;
}

export function OoliteAnnouncementsSection({
  limit,
  showViewAll = true,
  compact = false,
}: OoliteAnnouncementsSectionProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = ooliteTranslations[language];
  const isDark = theme === "dark";

  const announcements = limit
    ? ooliteAnnouncements.slice(0, limit)
    : ooliteAnnouncements;

  return (
    <motion.section
      id="announcements"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="mb-20"
    >
      <div
        className={`${
          isDark ? "bg-gray-800/50" : "bg-white"
        } rounded-xl p-6 border ${
          isDark ? "border-gray-700" : "border-gray-200"
        } backdrop-blur-sm`}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2
              className={`text-3xl font-bold flex items-center gap-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {t.announcementsTitle}
            </h2>
            <p
              className={`mt-2 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t.announcementsSubtitle}
            </p>
          </div>
          {showViewAll && limit && (
            <Link
              href="/tech-nonprofit/oolite/announcements"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                isDark
                  ? "bg-[#00FFFF]/20 text-[#00FFFF] hover:bg-[#00FFFF]/30"
                  : "bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20"
              } transition-colors`}
            >
              {t.viewAllAnnouncements}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div
          className={`grid gap-6 ${
            compact
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {announcements.map((announcement, index) => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
              index={index}
              isDark={isDark}
              compact={compact}
              linkLabel={t.learnMore}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function AnnouncementCard({
  announcement,
  index,
  isDark,
  compact,
  linkLabel,
}: {
  announcement: OoliteAnnouncement;
  index: number;
  isDark: boolean;
  compact: boolean;
  linkLabel: string;
}) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
        isDark
          ? "bg-gray-700/30 border-gray-600 hover:border-[#00FFFF]/40"
          : "bg-gray-50 border-gray-200 hover:border-[#00FFFF]/40"
      }`}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={announcement.image}
          alt={announcement.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div
          className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
            isDark ? "bg-[#00FFFF]/20 text-[#00FFFF]" : "bg-[#00FFFF]/30 text-[#00FFFF]"
          }`}
        >
          {announcement.category}
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white/90 text-xs">
          <Calendar className="w-3.5 h-3.5" />
          {announcement.date}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          className={`font-bold mb-2 line-clamp-2 ${
            isDark ? "text-white" : "text-gray-900"
          } ${compact ? "text-base" : "text-lg"}`}
        >
          {announcement.title}
        </h3>
        <p
          className={`text-sm mb-4 line-clamp-3 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {announcement.excerpt}
        </p>
        {announcement.link && (
          <span
            className={`inline-flex items-center gap-2 text-sm font-medium ${
              isDark ? "text-[#00FFFF] group-hover:text-[#00FFFF]/80" : "text-[#00FFFF] group-hover:text-[#00FFFF]/80"
            } transition-colors`}
          >
            {announcement.linkLabel || linkLabel}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        )}
      </div>
    </motion.div>
  );

  if (announcement.link) {
    return (
      <Link
        href={announcement.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </Link>
    );
  }

  return content;
}
