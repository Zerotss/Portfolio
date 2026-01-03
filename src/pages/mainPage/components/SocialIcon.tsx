import { motion } from "framer-motion";
import { socialMap } from "../../../data/AppData";

interface SocialIconProps {
    socialName: keyof typeof socialMap;
    href: string;
}


export default function SocialIcon({
    socialName,
    href,
}: SocialIconProps) {
    const IconComponent = socialMap[socialName].icon;

    if (!IconComponent) {
        console.warn(`Icon not found`);
        return null;
    }

    const social = socialMap[socialName];

    return (
        <motion.a
            href={href}
            target="_blank"
            className={` p-3 backdrop-blur-sm   rounded-2xl transition-all group shadow-md ${social.hoverShadow}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <IconComponent className={`w-6 h-6  ${social.hoverText} transition-colors`} />
        </motion.a>
    );
}