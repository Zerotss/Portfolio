import { motion } from "framer-motion";
import { journeyData } from "../../data/AppData";
import { useAppStore } from "../../stores/AppStore";
import CelticMenu, { type MenuItem } from "./components/CelticMenu";
import JourneyCardList from "./components/sections/trayectory/JourneyCardList";

import HeroSection from "./components/sections/hero/HeroSection";
import AboutSection from "./components/sections/about/AboutSection";
import ProjectsSection from "./components/sections/project/ProjectSection";

export default function MainPage() {

    const menuItems: MenuItem[] = [
        { id: 'intro', name: 'Inicio' },
        { id: 'projects', name: 'Proyectos' },
        { id: 'certificates', name: 'Certificados' }
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
                    transition={{ duration: 0.5, delay:0.2, ease: "easeIn" }}
                    viewport={{ once: true }}
                    className="bg-gray-100"
                >
                    <HeroSection id="intro" />
                    <AboutSection id="about" />

                <div
                    className="pt-8 mx-auto p-20  backdrop-blur-xs border-white/20 shadow-lg "
                >
                    <h2 className="text-5xl font-serif mb-10 text-center text-cyan-600 mt-10 ">
                        Mi Trayectoria
                    </h2>

                    <JourneyCardList journeyData={journeyData}></JourneyCardList>

                </div>

                <ProjectsSection id="projects" />

                {/* Farewell Section */}
                
                <section id="projects" className="py-20 px-4 sm:px-6">
                    <motion.div
                        className="text-center mt-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent ">
                            ¡Gracias por visitar mi portfolio!
                        </h3>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Si te ha gustado mi trabajo y quieres colaborar en algún proyecto, no dudes en contactarme. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla facere aliquam facilis veniam itaque quibusdam illum dolores laboriosam commodi, architecto dignissimos, fugiat deserunt odio provident adipisci alias optio eveniet. Non, id vero nostrum sequi, ullam aliquid porro eligendi totam tempora minima natus sit cumque dolore dicta labore earum nulla obcaecati mollitia exercitationem ut saepe! Provident, architecto maxime. Fugit excepturi rerum eligendi illo ad explicabo dolorum harum libero, maiores reprehenderit ipsum nisi, tenetur dolorem ullam tempora voluptatibus. Exercitationem cumque explicabo asperiores veritatis similique saepe minus facilis aspernatur. Placeat, illo atque! Dolores ipsum nemo deserunt pariatur illum numquam adipisci doloribus, vero natus?
                        </p>

                    </motion.div>
                </section>
                {/* Footer */}
                <section>
                    <div className="py-8 border-t border-white/10 mt-20">
                        <div className="text-center text-gray-500">
                            <p> Ángel Paredes Ballesteros ©2025</p>
                        </div>
                    </div>
                </section>
                </motion.div>
            </div>




        </>
    );
}
