import { useMediaQuery } from "react-responsive";
import { techMap } from "../../../../data/AppData";
import type { TechMapKey } from "../../../../types";
import Tag from "../../components/Tag";


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
          A proactive mindset has led me to develop a
          <span className="font-semibold"> custom code generator</span> to automate repetitive tasks,
          increasing team productivity and reducing manual errors. This reflects my tendency to take
          ownership and look for opportunities to improve existing systems.
        </p>

        <p className="leading-relaxed text-[clamp(0.95rem,1.5vw,1.2rem)] py-2">
          Alongside backend work, I have built a solid foundation in frontend development using
          <span className="font-semibold"> React and TypeScript</span>, allowing me to understand complete
          application architectures and collaborate effectively across the stack.
        </p>

        <p className="leading-relaxed text-[clamp(0.95rem,1.5vw,1.2rem)] py-2">
          In addition to technical skills, I am a
          <span className="font-semibold"> native Spanish and Norwegian speaker</span> with a
          <span className="font-semibold"> high level of English</span>, enabling smooth communication in
          international and multidisciplinary teams.
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
