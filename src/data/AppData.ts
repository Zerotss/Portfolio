import { GitBranchIcon } from "lucide-react";
import type { ComponentType } from "react";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { PiAndroidLogoBold, PiAngularLogoBold } from "react-icons/pi";
import { SiDotnet, SiGithub, SiGmail, SiJenkins, SiLinkedin, SiNodedotjs, SiReact, SiUnity } from "react-icons/si";
import { TbBrandCSharp, TbBrandKotlin, TbBrandTypescript } from "react-icons/tb";
import profilePicture from "../../src/assets/imgs/Perfil_nobg.webp";
import cvPdf from "../../src/assets/pdfs/personal/CV_Ángel_Paredes_Ballesteros_ES.pdf?url";
import type { MenuItem } from "../pages/mainPage/components/CelticMenu";
import type { JourneyItem, Project } from "../types";

export const personalData = {
    name: "Ángel Paredes Ballesteros",
    title: "Full Stack developer",
    cv: cvPdf,
    profilePicture: profilePicture,
    gitHub: "https://github.com/Zerotss",
    linkedIn: "https://www.linkedin.com/in/%C3%A1ngel-paredes-ballesteros-120732292/",
    gmail: "donpuentito@gmail.com",
}

// Ejemplo de journeyData con dos ítems
export const journeyData: JourneyItem[] = [
    {
        type: "work",
        title: "Junior Full Stack Developer",
        company: "Hiberus",
        year: "02/2025 – Today",
        description:
            "Formación en programación, bases de datos y control de versiones con Git. Incluye frameworks como Spring Boot, Java EE, .NET y Android Studio, con proyectos prácticos para crear aplicaciones robustas y escalables.",
        tags: ["Angular", "JSF", "SpringBoot", "Java", "Jenkins", "Git"],
    },
    {
        type: "work",
        title: "Industrial Cleaner",
        company: "Senior",
        year: "02/2025 – Today",
        description:
            "Formación en programación, bases de datos y control de versiones con Git. Incluye frameworks como Spring Boot, Java EE, .NET y Android Studio, con proyectos prácticos para crear aplicaciones robustas y escalables.",
        tags: [],
    },
    {
        type: "work",
        title: "Junior Mobile Developer",
        company: "Serbatic",
        year: "02/2025 – Today",
        description:
            "Formación en programación, bases de datos y control de versiones con Git. Incluye frameworks como Spring Boot, Java EE, .NET y Android Studio, con proyectos prácticos para crear aplicaciones robustas y escalables.",
        tags: ["Jetpack Compose", "Kotlin", "Git"],
    },
    {
        type: "study",
        title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
        company: "Centro Gregorio Fernández",
        year: "09/2022 – 06/2024",
        description:
            "Formación en programación, bases de datos y control de versiones con Git. Incluye frameworks como Spring Boot, Java EE, .NET y Android Studio, con proyectos prácticos para crear aplicaciones robustas y escalables.",
        tags: ["JSF", "SpringBoot", "Maui", "C#", "Java", "Git"],
    },
];

export const projectsData: Project[] = [

    {
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

        images: ["src/assets/imgs/projects/designIt.png", "src/assets/imgs/projects/designIt.png", "src/assets/imgs/projects/designIt.png"],

        github: "https://github.com/",
        demo: "https://demo.com",
    }, {
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

        images: ["src/assets/imgs/projects/designIt.png", "src/assets/imgs/projects/designIt.png", "src/assets/imgs/projects/designIt.png"],

        github: "https://github.com/",
        demo: "https://demo.com",
    }
]
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

    Maui: {
        icon: SiDotnet,
        colors: {
            from: "from-indigo-50",
            to: "to-indigo-100",
            border: "border-indigo-200/50",
            icon: "text-indigo-600",
            shadow: "0 4px 20px rgba(79,70,229,0.2)",
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
    { id: 'intro', name: 'Inicio' },
    { id: 'background', name: 'Trayectoria' },
    { id: 'projects', name: 'Proyectos' },
    { id: 'contact', name: 'Contacto' }
];
