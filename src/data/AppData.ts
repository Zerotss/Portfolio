import type { TechMapKey } from "../pages/mainPage/components/Tag";
import type { JourneyItem } from "../types";

export const personalData = {
    name: "Ángel Paredes Ballesteros",

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
        company: "Serbatic",
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
        company: "Centro de Enseñanza Concertada Gregorio Fernández",
        year: "09/2022 – 06/2024",
        description:
            "Formación en programación, bases de datos y control de versiones con Git. Incluye frameworks como Spring Boot, Java EE, .NET y Android Studio, con proyectos prácticos para crear aplicaciones robustas y escalables.",
        tags: ["JSF", "SpringBoot", "Maui", "C#", "Java", "Git"],
    },
];

export const technologies: TechMapKey[] = [
    "Angular",
    "React",
    "JSF",
    "Maui",
    "Jetpack Compose",
    "Unity",
    "Kotlin",
    "TypeScript",
    "Java",
    "C#",
    "Node",
    "SpringBoot",
    "Git",
    "Jenkins",
]