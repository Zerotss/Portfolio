import { ExternalLink, Eye } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import type { Project } from "../../../../types";

export default function ProjectButtons({
  project,
  watchMore,
}: {
  project: Project;
  watchMore: () => void;
}) {
  // Base de botón: desktop normal, mobile más pequeño
  const base =
    "flex items-center justify-center gap-2 " +
    "px-2 py-1.5 md:px-3 md:py-2 " + // <- padding menor en móvil
    "rounded-xl " +
    "backdrop-blur-md bg-white/90 border border-cyan-200/40 " +
    "text-cyan-900 shadow-md " +
    "transition-all duration-300 hover:scale-105";

  // Icono: más pequeño en móvil
  const iconClass = "w-3 h-3 md:w-4 md:h-4";

  // Texto: tamaño unificado, no cambia
  const labelClass =
    "text-xs font-semibold font-medieval whitespace-nowrap";

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <button onClick={watchMore} className={base}>
        <Eye className={iconClass} />
        <span className={`${labelClass} cursor-pointer`}>Details</span>
      </button>

      <a href={project.github} target="_blank" className={base}>
        <BsGithub className={iconClass} />
        <span className={labelClass}>GitHub</span>
      </a>

      <a href={project.demo} target="_blank" className={base}>
        <ExternalLink className={iconClass} />
        <span className={labelClass}>Demo</span>
      </a>
    </div>
  );
}
