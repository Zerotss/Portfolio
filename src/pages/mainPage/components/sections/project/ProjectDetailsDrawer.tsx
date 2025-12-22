import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Tag from "../../Tag";
import type { Project } from "../../../../../types";
import { useEffect } from "react";
import useMenuStore from "../../../../../stores/MenuStore";

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
                        className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={()=>{onClose()}}
                    />

                    {/* DRAWER */}
                    <motion.aside
                        className="
              fixed top-0 right-0 z-50 h-full
              w-full md:w-[45%] lg:w-[40%]
              bg-white/10 backdrop-blur-xl
              border-l border-white/20
              shadow-2xl
              overflow-y-auto
            "
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                        {/* HEADER */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <h3 className="text-3xl font-semibold text-cyan-600 ">
                                {project.title}
                            </h3>

                            <button
                                onClick={onClose}
                                className="p-2 rounded-xl hover:bg-white/10 transition"
                                aria-label="Close project details"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* CONTENT */}
                        <div className="p-8 space-y-10">
                            {/* INTRODUCTION */}
                            <section className="space-y-3">
                                <h4 className="text-lg font-semibold text-white">
                                    Introduction
                                </h4>
                                <p className="text-white/80 leading-relaxed">
                                    {project.introduction}
                                </p>
                            </section>

                            {/* TOOLS & TECHNOLOGIES */}
                            <section className="space-y-4">
                                <h4 className="text-lg font-semibold text-white">
                                    Tools & Technologies
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => (
                                        <Tag key={tech} icon={tech} size="md" />
                                    ))}
                                </div>
                            </section>

                            {/* LEARNINGS */}
                            <section className="space-y-4">
                                <h4 className="text-lg font-semibold text-white">
                                    Key Learning Outcomes
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-white/80">
                                    {project.learnings.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
