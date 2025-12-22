import { motion } from "framer-motion";
import {
    SiGithub,
    SiLinkedin,
    SiGmail
} from "react-icons/si";
import type { ComponentType } from "react";

// Mapa de iconos disponibles
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
    github: SiGithub,
    linkedin: SiLinkedin,
    gmail: SiGmail
};
const colorMap = {
    red: {
        hoverBg: "hover:bg-red-50",
        hoverText: "group-hover:text-red-600",
        hoverShadow: "hover:shadow-[0_4px_20px_rgba(239,68,68,0.4)]",
        border: "border-red-100",
    },
    blue: {
        hoverBg: "hover:bg-blue-50",
        hoverText: "group-hover:text-blue-600",
        hoverShadow: "hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)]",
        border: "border-blue-100",
    },
    amber: {
        hoverBg: "hover:bg-amber-50",
        hoverText: "group-hover:text-amber-600",
        hoverShadow: "hover:shadow-[0_4px_20px_rgba(245,158,11,0.4)]",
        border: "border-amber-100",
    },
    gray: {
        hoverBg: "hover:bg-gray-50",
        hoverText: "group-hover:text-gray-600",
        hoverShadow: "hover:shadow-[0_4px_20px_rgba(107,114,128,0.4)]",
        border: "border-gray-100",
    },
    indigo: {
        hoverBg: "hover:bg-indigo-50",
        hoverText: "group-hover:text-indigo-600",
        hoverShadow: "hover:shadow-[0_4px_20px_rgba(79,70,229,0.4)]",
        border: "border-indigo-100",
    },
} as const;

interface SocialIconProps {
    icon: keyof typeof iconMap;
    href: string;
    color?: keyof typeof colorMap;
    size?: "sm" | "md" | "lg";
}


// Tamaños de iconos
const sizeClasses = {
    sm: { padding: "p-2", icon: "w-4 h-4" },
    md: { padding: "p-3", icon: "w-6 h-6" },
    lg: { padding: "p-4", icon: "w-8 h-8" },
};

export default function SocialIcon({
    icon,
    href,
    color = "indigo",
    size = "md"
}: SocialIconProps) {
    const IconComponent = iconMap[icon];

    if (!IconComponent) {
        console.warn(`Icon "${icon}" not found`);
        return null;
    }
    
    const colors = colorMap[color];
    const sizes = sizeClasses[size];

    return (
        <motion.a
            href={href}
            target="_blank"
            className={`${sizes.padding} bg-white/80 backdrop-blur-sm border  border-indigo-100  rounded-2xl ${colors.hoverBg} transition-all group shadow-sm ${colors.hoverShadow}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <IconComponent className={`${sizes.icon} text-gray-700 ${colors.hoverText} transition-colors`} />
        </motion.a>
    );
}