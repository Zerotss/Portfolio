import { motion } from "framer-motion";
import { ExternalLink, Award, GraduationCap } from "lucide-react";
import type { Achievement } from "../../../../../types";

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const Icon =
    achievement.type === "award" ? Award : GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        flex items-center justify-between
        gap-6
        py-3
        border-b border-gray-200
        text-sm
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4 min-w-0">
        <Icon className="w-4 h-4 text-cyan-600 shrink-0" />

        <div className="truncate">
          <span className="font-medium text-gray-900">
            {achievement.title}
          </span>
          <span className="text-gray-500">
            {" "}— {achievement.issuer} · {achievement.year}
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 shrink-0">
        {achievement.technologies && (
          <span className="hidden md:block text-gray-400">
            {achievement.technologies.join(" · ")}
          </span>
        )}

        {achievement.link && (
          <a
            href={achievement.link}
            target="_blank"
            className="text-gray-400 hover:text-cyan-600 transition"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
