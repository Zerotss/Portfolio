import { useState } from "react";
import { projectsData } from "../../../../data/AppData";
import useMenuStore from "../../../../stores/MenuStore";
import type { Project } from "../../../../types";
import ProjectCard from "./ProjectCard";
import ProjectDetailsDrawer from "./ProjectDetailsDrawer";



interface ProjectsSectionProps {
  id: string;
}

export default function ProjectsSection({ id }: ProjectsSectionProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { openMenu, closeMenu, isMobile } = useMenuStore();
  return (
    <>
      <section id={id} className="bg-cyan-700 px-10 sm:px-10 md:px-15 lg:px-20 py-16 flex flex-col items-center space-y-6">


        <div className=" z-10">
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-medieval text-white mb-15  text-center md:text-left">Projects</h2>

          <div className=" max-w-full flex flex-col gap-10">

            {projectsData.map((item) => (
              <ProjectCard
                project={item}
                watchMore={() => {
                  setActiveProject(item)
                  closeMenu()
                }} />
            ))}
          </div>

        </div>

      </section>
      <ProjectDetailsDrawer
        project={activeProject}
        onClose={() => {
          setActiveProject(null)
          if (!isMobile) {
            openMenu()
          }
        }
        }
      />
    </>
  );
}
