import { useState } from "react";
import type { Achievement, Project } from "../../../../../types";
import AchievementCard from "./AchievementCard";
import ContactSection from "../contact/ContactSection";



interface AchievementSectionProps {
    id: string;
}

export default function AchievementSection({ id }: AchievementSectionProps) {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const achievements: Achievement[] = [
        {
            title: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            year: 2024,
            description:
                "Fundamental cloud concepts, AWS core services, security, and pricing models.",
            link: "https://www.credly.com/",
            technologies: ["AWS", "Cloud"],
            type: "certificate",
        },
        {
            title: "Java & Spring Boot Professional",
            issuer: "Udemy",
            year: 2023,
            description:
                "Backend development with Java and Spring Boot, REST APIs, validation, and testing.",
            link: "https://www.udemy.com/",
            technologies: ["Java", "Spring Boot", "REST"],
            type: "certificate",
        },
        {
            title: "1st Place – University Hackathon",
            issuer: "Engineering Faculty · XYZ University",
            year: 2023,
            description:
                "Built a full-stack application in 24 hours using React and Spring Boot, focusing on real-time collaboration.",
            technologies: ["React", "Spring Boot", "Full Stack"],
            type: "award",
        },
        {
            title: "Best Academic Project – Software Engineering",
            issuer: "Computer Science Department",
            year: 2022,
            description:
                "Designed and implemented a modular backend architecture with clean code principles and unit testing.",
            technologies: ["Java", "Clean Architecture", "Testing"],
            type: "award",
        },
    ];
    return (
        <section 
            id={id}
            className="pt-8 mx-auto  py-20 backdrop-blur-xs border-white/20 shadow-lg"
        >
            <h2 className="text-5xl font-serif mb-20 text-center text-cyan-700 mt-10">
                Certifications & Awards
            </h2>

            <div className="w-full max-w-4xl mx-auto">
                {achievements.map((item) => (
                    <AchievementCard key={item.title} achievement={item} />
                ))}
            </div>
            <ContactSection id="contact"/>

        </section>
    );
}
