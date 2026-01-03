import { motion } from "framer-motion";
import type { Project } from "../../../../types";
import Tag from "../../components/Tag";
import ProjectButtons from "./ProjectButtons";

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
        relative w-full rounded-3xl
        overflow-hidden
        bg-white/10 backdrop-blur-xl
        shadow-[0_8px_40px_rgba(0,0,0,0.25)]
      "
        >
            <div className="flex flex-col md:flex-row">
                {/* TEXT */}
                <div className="flex-1 p-8 flex flex-col justify-center space-y-4">
                    <h3 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-light text-white text-center md:text-start">
                        {project.title}
                    </h3>

                    <p className="text-white/80 leading-relaxed text-[clamp(0.95rem,1.5vw,1.2rem)] py-2 text-center md:text-start">
                        {project.introduction[0].substring(0, 200) + "..."}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {project.technologies.map((tech) => (
                            <Tag key={tech} icon={tech} size="sm" />
                        ))}
                    </div>
                </div>

                {/* IMAGE */}
                <div className="flex-1 relative group overflow-hidden">
                    <div className="w-full h-full aspect-[16/9] md:aspect-auto">
                        <img
                            src={project.images[0]}
                            loading="lazy"
                            className="
            w-full h-full object-cover object-center
            transition-transform duration-500 ease-out
            group-hover:scale-105 brightness-102 contrast-102
          "
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-white/10 to-transparent" />

                    <div
                        className="
                        absolute bottom-4 right-4
                        flex flex-col sm:flex-row md:flex-col xl:flex-row
                        gap-2 md:gap-3
                        items-end
                
                      "
                    >
                        <ProjectButtons project={project} watchMore={watchMore} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

