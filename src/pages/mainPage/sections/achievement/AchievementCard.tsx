import { Award, ExternalLink, GraduationCap } from "lucide-react";
import type { Achievement } from "../../../../types";
import Tag from "../../components/Tag";
import { BsGithub } from "react-icons/bs";

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const Icon = achievement.type === "award" ? Award : GraduationCap;

  return (
    <div
      className="
    relative
    flex flex-col sm:flex-row
    sm:justify-between
    gap-3 sm:gap-6
    border-b border-gray-200
    py-2
  "
    >

      {/* LEFT */}
      <div className="flex items-start sm:items-center gap-3 min-w-0">
        <Icon className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5 sm:mt-0" />

        <div className="flex flex-col min-w-0 gap-1 text-left">
          <span className="text-[clamp(0.95rem,1.5vw,1.2rem)] font-light  break-words">
            {achievement.title}
          </span>

          <div className="flex gap-3">
            <span className="text-cyan-800 text-[clamp(0.95rem,1.2vw,1.15rem)] font-medieval">
              {achievement.issuer} · {achievement.year}
            </span>
            {achievement.gitHub && (
              <a
                href={achievement.gitHub}
                target="_blank"
                className="
                self-center
                text-gray-500 hover:text-cyan-800 transition
                "
              >
                <BsGithub className="w-5 h-5" />
              </a>
            )}</div>


          {/* TECHNOLOGIES — MOBILE */}
          {achievement.technologies && (
            <div className="flex flex-wrap gap-1 sm:hidden mt-1">
              {achievement.technologies.map((tech) => (
                <Tag key={tech} icon={tech} size="sm" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT — DESKTOP */}
      <div className="hidden sm:flex items-center gap-3 ml-auto">
        {achievement.technologies && (
          <div className="flex gap-1">
            {achievement.technologies.map((tech) => (
              <Tag key={tech} icon={tech} size="sm" />
            ))}
          </div>
        )}
      </div>


      {achievement.link && (
        <a
          href={achievement.link}
          target="_blank"
          className="
      absolute right-0 top-3
      sm:static
      self-center
      text-gray-400 hover:text-cyan-800 transition
    "
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      )}


    </div >
  );
}
