import { GitBranchIcon } from "lucide-react";
import type { ComponentType } from "react";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { PiAndroidLogoBold, PiAngularLogoBold } from "react-icons/pi";
import { SiGithub, SiGmail, SiJenkins, SiLinkedin, SiNextdotjs, SiNodedotjs, SiReact, SiUnity } from "react-icons/si";
import { TbBrandCSharp, TbBrandKotlin, TbBrandTypescript } from "react-icons/tb";
import profilePicture from "/assets/imgs/profilePicture.webp";
import AngularHiberus from "/assets/pdfs/certifications/Angular_Hiberus.pdf?url";
import HeroesHiberusProgram from "/assets/pdfs/certifications/Heroes_Hiberus_Program.pdf?url";
import ReactNextUdemy from "/assets/pdfs/certifications/React_Next_Udemy.pdf";
import designItImg from "/assets/imgs/projects/designIt/designIt.webp";
import portfolioImg from "/assets/imgs/projects/portfolio/portfolio.webp";
//import cvPdf from "../../src/assets/pdfs/personal/CV_Ángel_Paredes_Ballesteros_ES.pdf?url";
import type { MenuItem } from "../pages/mainPage/components/CelticMenu";
import type { Achievement, JourneyItem, Project } from "../types";

export const personalData = {
    name: "Ángel Paredes Ballesteros",
    title: "Full Stack Developer",
    cv: null,
    profilePicture: profilePicture,
    gitHub: "https://github.com/Zerotss",
    linkedIn: "https://www.linkedin.com/in/%C3%A1ngel-paredes-ballesteros-120732292/",
    gmail: "donpuen.work@gmail.com",
}

// Ejemplo de journeyData con dos ítems
export const journeyData: JourneyItem[] = [
    {
        type: "work",
        title: "Junior Full Stack Developer",
        company: "Hiberus",
        year: "02/2025 – Today",
        description:
            "I have been involved in the development of enterprise-level applications, mainly focused on Java-based solutions. I contributed to improving team productivity by creating a custom code generator to automate repetitive tasks. I also collaborated directly with clients, understanding their needs and proposing clear and effective technical solutions.",
        tags: ["Angular", "JSF", "SpringBoot", "Java", "Jenkins", "Git"],
    },
    {
        type: "work",
        title: "Mobile Developer Intern",
        company: "Serbatic",
        year: "05/03/2024 – 24/05/2024",
        description:
            "I received training through the Android Basics with Jetpack Compose course and later participated in the development of an internal mobile application following Clean Architecture principles.",
        tags: ["Jetpack Compose", "Kotlin", "Git"],
    },
    {
        type: "study",
        title: "Higher Technician in Multiplatform Application Development",
        company: "Centro Gregorio Fernández",
        year: "09/2022 – 06/2024",
        description:
            "During my studies, I acquired a solid foundation in programming, databases, version control, and software development best practices. This period represents the core of my technical education and the basis of my professional growth as a developer.",
        tags: ["JSF", "SpringBoot", "C#", "Java", "Git"],
    },
];


export const projectsData: Project[] = [

    {
        id: "design-it",
        title: "Design It",
        introduction: [
            "Design It is an interior room design application created as my final project for the Cross-Platform Application Development program. It allows users to quickly create, visualize, and customize room layouts."
            , "Users can define room dimensions with automatic wall generation, place furniture from a categorized catalog, and freely manipulate objects by moving, rotating, scaling, and customizing their colors. The application includes real-time collision detection, multiple viewing perspectives, dynamic camera adjustment, 3D object previews, cloud-based saving, and immersive sound effects to enhance the overall design experience."

        ],
        technologies: [
            "Unity",
            "C#"
        ],
        learnings: [
            "Hands-on experience with Unity's core mechanics and features",
            "Mastered Firebase integration for real-time data storage and management",
            "Developed and tested a complete application, receiving user feedback to enhance usability."
        ],
        images: [
           designItImg
        ],
        github: "https://github.com/Zerotss/DesignIt",
        demo: "https://www.youtube.com/watch?v=G3dilCsIkr0"
    }
    , {
        id: "portfolio",
        title: "Portfolio",
        introduction: [
            "This portfolio was built as a personal frontend challenge after completing my React and Next.js courses. My main goal was to reinforce my frontend fundamentals and gain confidence building a real-world project from scratch.",
            "Built with React, Vite, TypeScript, and Zustand, this project focuses on clean component structure, reusable UI patterns, and a smooth user experience. It was fully designed and developed independently as a hands-on frontend challenge."],
        technologies: [
            "React",
            "Vite",
            "TypeScript",
            "Zustand"
        ],
        learnings: [
            "Strengthened my understanding of core React concepts and component architecture",
            "Applied global state management using Zustand in a real project",
            "Improved frontend decision-making, UI structuring, and project planning from scratch"
        ],
        images: [
            portfolioImg
        ],
        github: "https://github.com/Zerotss/Portfolio"
    }


]
export const achievements: Achievement[] = [
    {
        title: "React & TypeScript: Complete Guide (10+ Projects)",
        issuer: "Udemy",
        year: 2026,
        gitHub: "https://github.com/Zerotss/ReactCourse",
        link: ReactNextUdemy,
        technologies: ["React", "Next", "Node","TypeScript"],
        type: "certificate",
    },

    {
        title: "Heroes and Heroines Program (Angular)",
        issuer: "Hiberus",
        year: 2024,
        link: AngularHiberus,
        technologies: ["Angular", "TypeScript"],
        type: "certificate",
    },
    {
        title: "Heroes and Heroines Program (SpringBoot & TypeScript)",
        issuer: "Hiberus",
        year: 2024,
        link: HeroesHiberusProgram,
        technologies: ["SpringBoot", "Java", "TypeScript"],
        type: "certificate",
    },
];
{/*Technologies */ }
export const socialMap: Record<
    string,
    { icon: ComponentType<{ className?: string }>; hoverText: string; hoverShadow: string }
> = {
    github: {
        icon: SiGithub,
        hoverText: "group-hover:text-purple-500",
        hoverShadow: "hover:shadow-[0_4px_16px_rgba(128,90,213,0.3)]",
    },
    linkedin: {
        icon: SiLinkedin,
        hoverText: "group-hover:text-blue-600",
        hoverShadow: "hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)]",
    },
    gmail: {
        icon: SiGmail,
        hoverText: "group-hover:text-red-600",
        hoverShadow: "hover:shadow-[0_4px_20px_rgba(239,68,68,0.4)]",
    },
} as const;
export const techMap: Record<
    string,
    {
        icon: ComponentType<{ className?: string }>;
        colors: {
            from: string;
            to: string;
            border: string;
            icon: string;
            shadow: string;
        };
    }
> = {
    Angular: {
        icon: PiAngularLogoBold,
        colors: {
            from: "from-red-50",
            to: "to-red-100",
            border: "border-red-200/50",
            icon: "text-red-600",
            shadow: "0 4px 20px rgba(239,68,68,0.2)",
        },
    },

    React: {
        icon: SiReact,
        colors: {
            from: "from-cyan-50",
            to: "to-cyan-100",
            border: "border-cyan-200/50",
            icon: "text-cyan-500",
            shadow: "0 4px 20px rgba(6,182,212,0.2)",
        },
    },
    Next: {
        icon: SiNextdotjs,
        colors: {
            from: "from-slate-50",
            to: "to-slate-100",
            border: "border-slate-200/50",
            icon: "text-slate-800",
            shadow: "0 4px 20px rgba(15,23,42,0.2)",
        },
    },
    JSF: {
        icon: FaJava,
        colors: {
            from: "from-green-50",
            to: "to-green-100",
            border: "border-green-200/50",
            icon: "text-green-600",
            shadow: "0 4px 20px rgba(34,197,94,0.2)",
        },
    },
    "Jetpack Compose": {
        icon: PiAndroidLogoBold,
        colors: {
            from: "from-lime-50",
            to: "to-lime-100",
            border: "border-lime-200/50",
            icon: "text-lime-600",
            shadow: "0 4px 20px rgba(132,204,22,0.2)",
        },
    },

    Unity: {
        icon: SiUnity,
        colors: {
            from: "from-gray-50",
            to: "to-gray-200",
            border: "border-gray-300/50",
            icon: "text-gray-800",
            shadow: "0 4px 20px rgba(75,85,99,0.25)",
        },
    },

    Kotlin: {
        icon: TbBrandKotlin,
        colors: {
            from: "from-purple-50",
            to: "to-pink-100",
            border: "border-purple-200/50",
            icon: "text-purple-500",
            shadow: "0 4px 20px rgba(168,85,247,0.2)",
        },
    },

    TypeScript: {
        icon: TbBrandTypescript,
        colors: {
            from: "from-blue-50",
            to: "to-blue-100",
            border: "border-blue-200/50",
            icon: "text-blue-600",
            shadow: "0 4px 20px rgba(37,99,235,0.2)",
        },
    },

    Java: {
        icon: FaJava,
        colors: {
            from: "from-orange-50",
            to: "to-orange-100",
            border: "border-orange-200/50",
            icon: "text-orange-500",
            shadow: "0 4px 20px rgba(249,115,22,0.2)",
        },
    },

    "C#": {
        icon: TbBrandCSharp,
        colors: {
            from: "from-indigo-50",
            to: "to-indigo-100",
            border: "border-indigo-200/50",
            icon: "text-indigo-600",
            shadow: "0 4px 20px rgba(79,70,229,0.25)",
        },
    },

    Node: {
        icon: SiNodedotjs,
        colors: {
            from: "from-green-50",
            to: "to-green-100",
            border: "border-green-200/50",
            icon: "text-green-500",
            shadow: "0 4px 20px rgba(34,197,94,0.2)",
        },
    },

    SpringBoot: {
        icon: BiLogoSpringBoot,
        colors: {
            from: "from-emerald-50",
            to: "to-emerald-100",
            border: "border-emerald-200/50",
            icon: "text-emerald-500",
            shadow: "0 4px 20px rgba(16,185,129,0.2)",
        },
    },

    Git: {
        icon: GitBranchIcon,
        colors: {
            from: "from-orange-50",
            to: "to-orange-100",
            border: "border-orange-200/50",
            icon: "text-orange-600",
            shadow: "0 4px 20px rgba(234,88,12,0.2)",
        },
    },

    Jenkins: {
        icon: SiJenkins,
        colors: {
            from: "from-gray-50",
            to: "to-gray-100",
            border: "border-gray-200/50",
            icon: "text-gray-600",
            shadow: "0 4px 20px rgba(107,114,128,0.2)",
        },
    },
};
{/*App specific variables */ }
export const menuItems: MenuItem[] = [
    { id: 'intro', name: 'Home' },
    { id: 'background', name: 'Background' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' }
];
