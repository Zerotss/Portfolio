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
        hoverText: "group-hover:text-red-600",
        hoverShadow: "hover:shadow-[0_4px_20px_rgba(239,68,68,0.4)]",
    },
    blue: {
        hoverText: "group-hover:text-blue-600",
        hoverShadow: "hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)]",
    },
    cyan: {
        hoverText: "group-hover:text-cyan-600",
        hoverShadow: "hover:shadow-[0_4px_16px_rgba(8,145,178,0.3)]",
    },
} as const;

interface SocialIconProps {
    icon: keyof typeof iconMap;
    href: string;
    color?: keyof typeof colorMap;
}


export default function SocialIcon({
    icon,
    href,
    color="cyan"
}: SocialIconProps) {
    const IconComponent = iconMap[icon];

    if (!IconComponent) {
        console.warn(`Icon "${icon}" not found`);
        return null;
    }
    
    const colors = colorMap[color];

    return (
        <motion.a
            href={href}
            target="_blank"
            className={` p-3 backdrop-blur-sm   rounded-2xl transition-all group shadow-md ${colors.hoverShadow}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <IconComponent className={`w-6 h-6  ${colors.hoverText} transition-colors`} />
        </motion.a>
    );
}