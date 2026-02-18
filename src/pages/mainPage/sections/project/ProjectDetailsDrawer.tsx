import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "../../../../types";
import Tag from "../../components/Tag";
import ImageCarousel from "./carousel/ImageCarrousel";

interface ProjectDetailsDrawerProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectDetailsDrawer({
    project,
    onClose,
}: ProjectDetailsDrawerProps) {

    useEffect(() => {
        if (!project) {
            document.body.style.overflow = "auto"
            return;
        }
        document.body.style.overflow = project ? "hidden" : "";
    }, [project]);
    return (
        <AnimatePresence>
            {project && (
                <>
                    {/* OVERLAY */}
                    <motion.div
                        className="fixed inset-0 z-150 bg-cyan-900/50  backdrop-blur-md h-[100%]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => { onClose() }}
                    />

                    {/* DRAWER */}
                    <motion.aside
                        className="
                            fixed top-0 right-0 z-160 h-full
                            w-full md:w-[50%] lg:w-[40%]
                        bg-white/75 backdrop-blur-sm
                            border-l border-cyan-200/40
                            shadow-2xl
                            overflow-y-auto
                        "
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                        {/* HEADER */}
                        <div className=" ">
                            <div className="sticky top-0 z-300 bg-cyan-600/10 backdrop-blur-md border-b border-cyan-100/30 px-5 sm:px-5 md:px-6 lg:px-8 py-5 flex items-center justify-between">
                                <h3 className="font-medieval text-[clamp(1.5rem,3.5vw,2.5rem)] text-cyan-800 drop-shadow-sm">
                                    {project.title}
                                </h3>

                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-xl hover:bg-white/40 transition-colors cursor-pointer"
                                    aria-label="Close project details"
                                >
                                    <X className="w-8 h-8 text-cyan-800" />
                                </button>
                            </div>

                            <div className="px-5 sm:px-5 md:px-6 lg:px-8 py-5 space-y-8">

                                {/* CONTENT */}
                                <h4 className="font-light text-[clamp(1.5rem,2.5vw,1.9rem)] text-cyan-700 drop-shadow-sm">
                                    Context
                                </h4>

                                <div className="space-y-4 text-cyan-900/90 leading-relaxed text-[clamp(0.95rem,1.5vw,1.2rem)]">
                                    {project.introduction.map((paragraph, i) => (
                                        <p key={i}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                <ImageCarousel images={project.images} />

                                {/* LEARNINGS */}
                                <h4 className="font-light text-[clamp(1.5rem,2.5vw,1.9rem)] text-cyan-700 drop-shadow-sm">
                                    Key Learning Outcomes
                                </h4>

                                <ul className="list-disc list-inside text-cyan-900/80 text-[clamp(0.95rem,1.5vw,1.2rem)] space-y-2">
                                    {project.learnings.map((item, i) => (
                                        <li key={i} className="leading-snug">
                                            {item}
                                        </li>
                                    ))}
                                </ul>


                                {/* TOOLS & TECHNOLOGIES */}
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => (
                                        <Tag key={tech} icon={tech} size="sm" />
                                    ))}
                                </div>

                            </div>


                        </div>



                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
