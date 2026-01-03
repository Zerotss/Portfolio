import { journeyData } from "../../../../data/AppData";
import JourneyCard from "./JourneyCard";

interface BackgroundSectionProps {
  id: string;
}
export default function BackgroundSection({ id }: BackgroundSectionProps) {
  return (

    <section id={id} className="px-10 sm:px-10 md:px-15 lg:px-20 py-16  items-center justify-center space-y-6 ">
      <div className="max-w-5xl mx-auto text-center  z-10 ">
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] relative mb-15 text-cyan-600 font-medieval sm:text-center md:text-left  ">
          Background
        </h2>

        <div className="max-w-full flex flex-col gap-30">
          {journeyData.map((item, index) => (
            <JourneyCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
      

    </section>
  );
}
