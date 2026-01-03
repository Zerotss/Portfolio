import { motion } from "framer-motion";
import type { Project } from "../../../../types";
import Tag from "../../components/Tag";
import ProjectButtons from "./ProjectButtons";

interface ProjectCardProps {
  project: Project;
  watchMore: () => void;
}

export default function ProjectCard({ project, watchMore }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      className="
        relative w-full rounded-3xl overflow-hidden
        bg-white/10
        md:backdrop-blur-xl
        shadow-[0_8px_40px_rgba(0,0,0,0.25)]
         border border-white/20   
         
      "
    >
      <div className="flex flex-col md:flex-row">

        {/* ================= TEXT (DESKTOP) ================= */}
        <div
          className="
            hidden md:flex flex-1
            p-8
            flex-col justify-center
            space-y-4
          "
        >
          <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] font-light text-white">
            {project.title}
          </h3>

          <p className="text-white/80 leading-relaxed text-[clamp(1rem,1.2vw,1.15rem)]">
            {project.introduction[0].substring(0, 200)}...
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech} icon={tech} size="sm" />
            ))}
          </div>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="relative flex-1 overflow-hidden rounded-2xl group">
        <div className="relative w-full aspect-[16/9] md:h-full md:aspect-[16/9]">
        <img
              src={project.images[0]}
              loading="lazy"
              className="
                w-full h-full object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-105
              "
            />
          </div>

          {/* Overlay solo desktop */}
          <div className=" absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-white/10 to-transparent" />

          {/* BOTONES OVERLAY (DESKTOP) */}
          <div className="hidden md:flex absolute bottom-4 right-4">
            <ProjectButtons project={project} watchMore={watchMore} />
          </div>
        </div>

        {/* ================= MOBILE CONTENT ================= */}
        <div className="md:hidden px-4 py-3 space-y-6">
          <h3 className="text-white font-light text-4xl text-center ">
            {project.title}
          </h3>

          <div className="flex justify-center">
            <ProjectButtons project={project} watchMore={watchMore} />
          </div>
        </div>

      </div>
    </motion.div>
  );
}
