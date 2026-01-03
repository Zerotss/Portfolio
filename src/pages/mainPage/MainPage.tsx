import { motion } from "framer-motion";
import { menuItems } from "../../data/AppData";
import { useAppStore } from "../../stores/AppStore";
import CelticMenu from "./components/CelticMenu";

import AboutSection from "./sections/about/AboutSection";
import AchievementSection from "./sections/achievement/AchievementSection";
import BackgroundSection from "./sections/background/BackgroundSection";
import Footer from "./sections/footer/Footer";
import HeroSection from "./sections/hero/HeroSection";
import ProjectsSection from "./sections/project/ProjectSection";

export default function MainPage() {

    const { currentState } = useAppStore();

    return (
        <>
            {currentState === "Main" && (
                <>
                    <CelticMenu menuItems={menuItems} />
                </>
            )}
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
            >
                <HeroSection id="intro" />
                <AboutSection id="about" />
                <BackgroundSection id="background" />
            </motion.div>

            <ProjectsSection id="projects" />
            <AchievementSection id="achievement" />
            <Footer />
        </>
    );
}
