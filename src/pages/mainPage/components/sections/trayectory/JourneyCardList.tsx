import type { JourneyItem } from "../../../../../types";
import JourneyCard from "./JourneyCard";

interface JourneyCardListProps {
  journeyData: JourneyItem[];
}

export default function JourneyCardList({ journeyData }: JourneyCardListProps) {
  return (
    <section className="w-full flex flex-col items-center py-24 px-6 sm:px-8 ">

      <div className="w-full max-w-6xl flex flex-col gap-32 sm:gap-36">
        {journeyData.map((item, index) => (
          <JourneyCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
