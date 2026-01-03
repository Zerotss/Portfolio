import { achievements } from "../../../../data/AppData";
import AchievementCard from "./AchievementCard";

interface AchievementSectionProps {
    id: string;
}

export default function AchievementSection({ id }: AchievementSectionProps) {
    return (
        <section
            id={id}
            className="flex flex-col items-center px-10 sm:px-10 md:px-15 lg:px-20 py-16 space-y-6"
        >
            <div className="max-w-5xl text-center md:text-left z-10 w-full">
                <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-medieval mb-15 text-cyan-700">Certifications</h2>
                <div>
                    {achievements.map((item) => (
                        <AchievementCard key={item.title} achievement={item} />
                    ))}
                </div>
            </div>
        </section>

    );
}
