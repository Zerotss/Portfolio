import type { TechMapKey } from "../pages/mainPage/components/Tag";

export interface JourneyItem {
    type: "work" | "study";
    title: string;
    company: string;
    year: string;
    description: string;
    tags: TechMapKey[];
}
export interface Project {
    id: string;
    title: string;
    introduction: string[];
    technologies: TechMapKey[];
    learnings: string[];
    images: string[];
    github: string;
    demo: string;
  }