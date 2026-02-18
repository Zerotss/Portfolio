import type { techMap } from "../data/AppData";

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
  export interface Achievement {
    title: string;
    issuer: string;
    year: number;
    link?: string;
    gitHub?: string;
    technologies: TechMapKey[];
    type: "certificate" | "award";
}
export type TechMapKey = keyof typeof techMap

  