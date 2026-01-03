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
    const base =
      "flex items-center justify-center gap-2 px-4 py-2  rounded-xl min-w-[120px] " +
      "backdrop-blur-md bg-white/90 border border-cyan-200/40 text-cyan-900 shadow-md " +
      "transition-all duration-300 hover:bg-white/100 hover:scale-105 whitespace-nowrap";
  
    const labelClass = "text-sm font-semibold font-medieval"; // más legible que medieval en botones pequeños
  
    return (
      <>
        <button onClick={watchMore} className={base}>
          <Eye className="w-4 h-4" />
          <p className={labelClass}>Details</p>
        </button>
  
        <a href={project.github} target="_blank" className={base}>
          <BsGithub className="w-4 h-4" />
          <p className={labelClass}>GitHub</p>
        </a>
  
        <a href={project.demo} target="_blank" className={base}>
          <ExternalLink className="w-4 h-4" />
          <p className={labelClass}>Demo</p>
        </a>
      </>
    );
  }
  
  

  