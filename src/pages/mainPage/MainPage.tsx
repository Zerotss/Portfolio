import { motion } from "framer-motion";
import { journeyData } from "../../data/AppData";
import { useAppStore } from "../../stores/AppStore";
import CelticMenu, { type MenuItem } from "./components/CelticMenu";
import JourneyCardList from "./components/sections/trayectory/JourneyCardList";

import HeroSection from "./components/sections/hero/HeroSection";
import AboutSection from "./components/sections/about/AboutSection";
import ProjectsSection from "./components/sections/project/ProjectSection";
import AchievementSection from "./components/sections/achievement/AchievementSection";
import ContactSection from "./components/sections/contact/ContactSection";
import Footer from "./components/sections/footer/Footer";

export default function MainPage() {

    const menuItems: MenuItem[] = [
        { id: 'intro', name: 'Inicio' },
        { id: 'trayectory', name: 'Trayectoria' },
        { id: 'projects', name: 'Proyectos' },
        { id: 'contact', name: 'Contacto' }
    ];

    const { currentState } = useAppStore();

    return (
        <>
            {currentState === "Main" && (
                <>
                    <CelticMenu menuItems={menuItems} />
                </>
            )}

            {/* Navigation Menu */}

            {/* Celtic Pattern Background */}
            <div >
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
                    viewport={{ once: true }}
                    className="bg-gray-100"
                >
                    <HeroSection id="intro" />
                    <AboutSection id="about" />

                    <section id="trayectory" >
                        <div
                            className="pt-8 mx-auto p-20  backdrop-blur-xs border-white/20 shadow-lg "
                        >
                            <h2 className="text-5xl font-serif mb-10 text-center text-cyan-600 mt-10 ">
                                Mi Trayectoria
                            </h2>

                            <JourneyCardList journeyData={journeyData}></JourneyCardList>

                        </div>
                        <ProjectsSection id="projects" />

                    </section>
                    
                    <AchievementSection id="achievement"/>
                    {/* Farewell Section */}
                    {/* Footer */}
                    <Footer/>
                </motion.div>
            </div>
        </>
    );
}
