import { Briefcase, GraduationCap } from "lucide-react";
import type { JourneyItem } from "../../../../types";
import Tag from "../../components/Tag";

interface JourneyCardProps {
    item: JourneyItem;
    index: number;
}

export default function JourneyCard({ item, index }: JourneyCardProps) {
    const alignRight = index % 2 !== 0;
    return (
        <div
        className={`relative flex flex-col md:flex-row md:items-baseline md:gap-4 ${
            alignRight ? "md:flex-row-reverse" : ""
          }`}
        >
            <div className={`flex flex-col items-center text-center mx-auto  w-full sm:w-auto ${alignRight? "md:text-left md:items-start":"md:text-right md:items-end"}`}>
                {item.type === "work" ? (
                    <Briefcase className="w-3 h-3 text-cyan-600 opacity-80 " />
                ) : (
                    <GraduationCap className="w-3 h-3 text-cyan-600 opacity-80" />
                )}
                <span className="text-cyan-600 font-medieval font-semibold text-[clamp(0.95rem,1.3vw,1.1rem)] tracking-[0.15em] uppercase">
                    {item.year}
                </span>

                <div className="w-16 h-[1px] bg-cyan-300 mt-1 md:opacity-50 opacity-0"></div>
            </div>

            <div
                className={`flex-1 flex flex-col  mx-auto ${alignRight ? "md:text-right md:items-end" : "md:text-left md:items-start"
                    } text-center `}
            >
                <h3 className=" text-gray-800 text-[clamp(1.5rem,2.5vw,1.9rem)] font-light leading-tight mb-1">
                    {item.title}
                </h3>
                <p className="text-cyan-700 text-[clamp(0.95rem,1.5vw,1.3rem)] font-medieval uppercase  mb-3">
                    {item.company}
                </p>

                <p className="text-gray-600 text-[clamp(0.95rem,1.5vw,1.2rem)] leading-relaxed mb-4 max-w-xl">
                    {item.description}
                </p>

                <div
                    className={`flex flex-wrap w-full gap-2 justify-center ${alignRight ? "md:justify-end" : "md:justify-start"
                        }`}
                >
                    {item.tags.map((tag, i) => (
                            <Tag icon={tag} key={i} size="sm" />
                    ))}
                </div>
            </div>
        </div>
    );
}
