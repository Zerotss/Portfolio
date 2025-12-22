import { motion } from "framer-motion";
import { GitBranchIcon } from "lucide-react";
import type { ComponentType } from "react";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { PiAndroidLogoBold, PiAngularLogoBold } from "react-icons/pi";
import { SiDotnet, SiJenkins, SiNodedotjs, SiReact, SiUnity } from "react-icons/si";
import { TbBrandCSharp, TbBrandKotlin, TbBrandTypescript } from "react-icons/tb";
export const techMap: Record<
  string,
  {
    icon: ComponentType<{ className?: string }>;
    colors: {
      from: string;
      to: string;
      border: string;
      icon: string;
      shadow: string;
    };
  }
> = {
  Node: {
    icon: SiNodedotjs,
    colors: {
      from: "from-green-50",
      to: "to-green-100",
      border: "border-green-200/50",
      icon: "text-green-500",
      shadow: "0 4px 20px rgba(34,197,94,0.2)",
    },
  },
  SpringBoot: {
    icon: BiLogoSpringBoot,
    colors: {
      from: "from-emerald-50",
      to: "to-emerald-100",
      border: "border-emerald-200/50",
      icon: "text-emerald-500",
      shadow: "0 4px 20px rgba(16,185,129,0.2)",
    },
  },
  Angular: {
    icon: PiAngularLogoBold,
    colors: {
      from: "from-red-50",
      to: "to-red-100",
      border: "border-red-200/50",
      icon: "text-red-600",
      shadow: "0 4px 20px rgba(239,68,68,0.2)",
    },
  },
  React: {
    icon: SiReact,
    colors: {
      from: "from-cyan-50",
      to: "to-cyan-100",
      border: "border-cyan-200/50",
      icon: "text-cyan-500",
      shadow: "0 4px 20px rgba(6,182,212,0.2)",
    },
  },
  TypeScript: {
    icon: TbBrandTypescript,
    colors: {
      from: "from-blue-50",
      to: "to-blue-100",
      border: "border-blue-200/50",
      icon: "text-blue-600",
      shadow: "0 4px 20px rgba(37,99,235,0.2)",
    },
  },
  Java: {
    icon: FaJava,
    colors: {
      from: "from-orange-50",
      to: "to-orange-100",
      border: "border-orange-200/50",
      icon: "text-orange-500",
      shadow: "0 4px 20px rgba(249,115,22,0.2)",
    },
  },
  Maui: {
    icon: SiDotnet,
    colors: {
      from: "from-indigo-50",
      to: "to-indigo-100",
      border: "border-indigo-200/50",
      icon: "text-indigo-600",
      shadow: "0 4px 20px rgba(79,70,229,0.2)",
    },
  },
  "Jetpack Compose": {
    icon: PiAndroidLogoBold,
    colors: {
      from: "from-lime-50",
      to: "to-lime-100",
      border: "border-lime-200/50",
      icon: "text-lime-600",
      shadow: "0 4px 20px rgba(132,204,22,0.2)",
    },
  },
  Kotlin: {
    icon: TbBrandKotlin,
    colors: {
      from: "from-purple-50",
      to: "to-pink-100",
      border: "border-purple-200/50",
      icon: "text-purple-500",
      shadow: "0 4px 20px rgba(168,85,247,0.2)",
    },
  },
  Jenkins: {
    icon: SiJenkins,
    colors: {
      from: "from-gray-50",
      to: "to-gray-100",
      border: "border-gray-200/50",
      icon: "text-gray-600",
      shadow: "0 4px 20px rgba(107,114,128,0.2)",
    },
  },
  Git: {
    icon: GitBranchIcon,
    colors: {
      from: "from-orange-50",
      to: "to-orange-100",
      border: "border-orange-200/50",
      icon: "text-orange-600",
      shadow: "0 4px 20px rgba(234,88,12,0.2)",
    },
  },
  JSF: {
    icon: FaJava,
    colors: {
      from: "from-green-50",
      to: "to-green-100",
      border: "border-green-200/50",
      icon: "text-green-600",
      shadow: "0 4px 20px rgba(34,197,94,0.2)",
    },
  },
  Unity: {
    icon: SiUnity,
    colors: {
      from: "from-gray-50",
      to: "to-gray-200",
      border: "border-gray-300/50",
      icon: "text-gray-800",
      shadow: "0 4px 20px rgba(75,85,99,0.25)",
    },
  },
  "C#": {
    icon: TbBrandCSharp,
    colors: {
      from: "from-indigo-50",
      to: "to-indigo-100",
      border: "border-indigo-200/50",
      icon: "text-indigo-600",
      shadow: "0 4px 20px rgba(79,70,229,0.25)",
    }
  }
};
export type TechMapKey = keyof typeof techMap
// 2. Tamaños
const sizeClasses = {
  sm: { padding: "px-2 py-1", icon: "w-3 h-3", text: "text-xs" },
  md: { padding: "px-4 py-2", icon: "w-4 h-4", text: "text-sm" },
  lg: { padding: "px-5 py-3", icon: "w-6 h-6", text: "text-base" },
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
      className={`${sizes.padding} bg-gradient-to-r ${colors.from} ${colors.to} border ${colors.border} rounded-2xl flex items-center gap-2 shadow-sm`}
      whileHover={{ scale: 1.05, boxShadow: colors.shadow }}
    >
      <IconComponent className={`${sizes.icon} ${colors.icon}`} />
      <span className={`${sizes.text} text-gray-700`}>
        {icon}
      </span>
    </motion.div>
  );
}