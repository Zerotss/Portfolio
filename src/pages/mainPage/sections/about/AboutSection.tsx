import { techMap } from "../../../../data/AppData";
import type { TechMapKey } from "../../../../types";
import Tag from "../../components/Tag";
import { useMediaQuery } from "react-responsive";


interface AboutSectionProps {
  id: string;
}

export default function AboutSection({ id }: AboutSectionProps) {
  const techKeys = Object.keys(techMap) as TechMapKey[];
  const isSmall = useMediaQuery({ maxWidth: 767 });
  const size = isSmall ? "sm" : "md";
  return (
    <section
      id={id}
      className="bg-cyan-600 text-white px-10 sm:px-10 md:px-15 lg:px-20 py-16 flex flex-col items-center justify-center space-y-6  "
    >
      <div className="max-w-5xl text-center md:text-left z-10">
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] mb-4 font-medieval">
          About Me
        </h2>
        <p className="leading-relaxed text-[clamp(0.95rem,1.5vw,1.2rem)] py-2">
          I am a <span className="font-semibold">Full Stack Developer</span> specializing in enterprise-level <span className="font-semibold">Java applications</span>, with a strong focus on <span className="font-semibold">Android development</span> during both my studies and professional internships. I aim to deliver robust, maintainable solutions while continuously improving existing workflows and code quality.
        </p>

        <p className="leading-relaxed text-[clamp(0.95rem,1.5vw,1.2rem)] py-2">
          Beyond my main responsibilities, I developed a <span className="font-semibold">custom code generator</span> to automate repetitive tasks, boosting team productivity and reducing manual errors. This reflects my proactive approach to taking ownership and improving systems wherever possible.
        </p>

        <p className="leading-relaxed text-[clamp(0.95rem,1.5vw,1.2rem)] py-2">
          I also have a solid foundation in frontend development with <span className="font-semibold">React and TypeScript</span>, enabling me to understand the full application architecture and collaborate effectively across the stack.
        </p>

        <p className="leading-relaxed text-[clamp(0.95rem,1.5vw,1.2rem)] py-2">
          I am a <span className="font-semibold">native Spanish and Norwegian speaker</span> and possess a <span className="font-semibold">high level of English</span>, allowing me to work seamlessly in international and multidisciplinary teams.
        </p>



      </div>

      {/* Tags / Skills */}
      <div className="flex flex-wrap justify-center gap-3 max-w-5xl">
        {techKeys.map((tech) => (
          <Tag key={tech} icon={tech} size={size} />
        ))}
      </div>
    </section>
  );
}
