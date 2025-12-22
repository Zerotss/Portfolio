import { motion } from "framer-motion";
import {  ExternalLink, Eye } from "lucide-react";
import Tag from "../../Tag";
import { BsGithub } from "react-icons/bs";
import type { Project } from "../../../../../types";

interface ProjectCardProps {
    project: Project;
    watchMore: () => void;
}
export default function ProjectCard({
    project,
    watchMore
}: ProjectCardProps) {

      
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="
        relative w-full mb-12 rounded-3xl
        overflow-hidden
        bg-white/5 backdrop-blur-xl
        shadow-[0_8px_40px_rgba(0,0,0,0.25)]
      "
        >
            <div className="flex flex-col md:flex-row">
                {/* TEXT */}
                <div className="flex-1 p-8 flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                    </h3>

                    <p className="text-white/80 leading-relaxed">
                        {project.introduction[0].substring(0,200)+"..."}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech) => (
                            <Tag key={tech} icon={tech} size="sm" />
                        ))}
                    </div>
                </div>

                {/* IMAGE */}
                <div className="flex-1 relative group overflow-hidden">
                    <img
                        src={project.images[0]}
                        loading="lazy"
                        className="
              w-full h-80 object-cover
              transition-transform duration-500 ease-out
              group-hover:scale-105
            "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* BUTTONS */}
                    <div className="absolute bottom-4 right-4 flex gap-3">
                        <button
                            type="button"
                            onClick={() => watchMore()}
                            className="
                                flex items-center gap-1 px-4 py-2 text-sm
                                rounded-xl
                                bg-white/80 backdrop-blur
                                text-black font-semibold
                                hover:bg-white transition
                            "
                        >
                            <Eye className="w-4 h-4" />
                            Ver más
                        </button>
                        <a
                            href={project.github}
                            target="_blank"
                            className="
                flex items-center gap-1 px-4 py-2 text-sm
                rounded-xl
                bg-white/15 backdrop-blur
                text-white border border-white/30
                hover:bg-white/25 transition
              "
                        >
                            <BsGithub className="w-4 h-4" />
                            GitHub
                        </a>

                        <a
                            href={project.demo}
                            target="_blank"
                            className="
                flex items-center gap-1 px-4 py-2 text-sm
                rounded-xl
                bg-black/50 backdrop-blur
                text-white
                hover:bg-black/70 transition
              "
                        >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

