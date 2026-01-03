import { motion } from "framer-motion";
import { techMap } from "../../../data/AppData";
import type { TechMapKey } from "../../../types";

const sizeClasses = {
  sm: { padding: "px-2 py-2", icon: "w-3 h-3", text: "text-xs" },
  md: { padding: "px-4 py-2", icon: "w-4 h-4", text: "text-sm" }
};

interface TagProps {
  icon: TechMapKey;
  size?: keyof typeof sizeClasses;
}

export default function Tag({ icon, size = "md" }: TagProps) {
  const tech = techMap[icon];
  if (!tech) return null;

  const IconComponent = tech.icon;
  const colors = tech.colors;
  const sizes = sizeClasses[size];


  return (
    <motion.div
      className={`${sizes.padding} bg-gradient-to-r ${colors.from} ${colors.to} border ${colors.border} rounded-2xl flex items-center gap-2 shadow-sm z-100`}
      whileHover={{ scale: 1.05, boxShadow: colors.shadow }}
    >
      <IconComponent className={`${sizes.icon} ${colors.icon}`} />
      <span className={`${sizes.text} text-gray-700`}>
        {icon}
      </span>
    </motion.div>
  );
}