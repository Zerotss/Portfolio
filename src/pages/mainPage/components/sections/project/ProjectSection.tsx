import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "../../../../../types";
import ProjectDetailsDrawer from "./ProjectDetailsDrawer";
import useMenuStore from "../../../../../stores/MenuStore";



interface ProjectsSectionProps {
  id: string;
}

export default function ProjectsSection({ id }: ProjectsSectionProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { openMenu, closeMenu } = useMenuStore();
  const designItProject: Project = {
    id: "design-it",
    title: "DesignIt",
    introduction: [
      "DesignIt nace como una herramienta para centralizar el proceso de diseño de interfaces antes de la fase de desarrollo. El objetivo principal fue crear una aplicación sencilla pero potente que permitiera estructurar ideas, documentar decisiones de diseño y facilitar la colaboración entre diseño y desarrollo.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "SpringBoot",
      "Git",
    ],

    learnings: [
      "Diseño de una arquitectura frontend escalable con React y TypeScript",
      "Comunicación eficiente entre frontend y backend mediante APIs REST",
      "Gestión de estado y reutilización de componentes",
      "Buenas prácticas de versionado y trabajo con Git",
      "Separación clara de responsabilidades entre capas",
    ],

    images: ["src/assets/imgs/projects/designIt.png","src/assets/imgs/projects/designIt.png","src/assets/imgs/projects/designIt.png"],

    github: "https://github.com/",
    demo: "https://demo.com",
  };
  return (
    <section id={id} className="bg-cyan-700 py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center">Proyectos</h2>

      <div className="w-full max-w-6xl flex flex-col">
        <ProjectCard
          project={designItProject}
          watchMore={() => {
            setActiveProject(designItProject)
            closeMenu()
          }}
        />

      </div>
      <ProjectDetailsDrawer
        project={activeProject}
        onClose={() => {
          setActiveProject(null)
          openMenu()
        }
        }
      />
    </section>
  );
}
