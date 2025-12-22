import type { JourneyItem } from "../../../../../types";
import Tag from "../../Tag";



interface JourneyCardProps {
    item: JourneyItem;
    index: number;
}

export default function JourneyCard({ item, index }: JourneyCardProps) {
    const alignRight = index % 2 === 0;

    return (
        <article
            className={`relative flex flex-col sm:flex-row items-start gap-8 sm:gap-16 ${alignRight ? "sm:flex-row-reverse" : ""
                }`}
        >
            <div className="flex flex-col items-center sm:items-start mt-1 w-full sm:w-auto">
                <span className="text-cyan-600 font-medium text-sm tracking-[0.15em] uppercase">
                    {item.year}
                </span>
                <div className="w-12 h-[1px] bg-cyan-300 mt-3 opacity-50"></div>
            </div>

            <div
                className={`flex-1 flex flex-col ${alignRight ? "sm:text-right sm:items-end" : "sm:text-left sm:items-start"
                    } text-center sm:text-left`}
            >
                <h3 className="text-lg sm:text-xl font-medium text-gray-800 leading-snug mb-1">
                    {item.title}
                </h3>
                <p className="text-cyan-700 text-xs sm:text-sm uppercase  mb-3">
                    {item.company}
                </p>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 max-w-xl">
                    {item.description}
                </p>

                <div
                    className={`flex flex-wrap w-full gap-2 justify-center ${alignRight ? "sm:justify-end" : "sm:justify-start"
                        }`}
                >
                    {item.tags.map((tag, i) => (
                        <div key={i} className="flex-shrink-0">
                            <Tag icon={tag} size="sm" />
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
