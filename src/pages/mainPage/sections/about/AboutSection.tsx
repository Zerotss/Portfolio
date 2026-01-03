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
        Soy un <span className="font-semibold">desarrollador junior</span> comprometido y con experiencia en la creación de aplicaciones móviles, especialmente utilizando <span className="font-semibold">Jetpack Compose</span> y <span className="font-semibold">Clean Architecture</span>. Me apasiona crear código limpio, escalable y eficiente.
        </p>
        <p className="leading-relaxed text-[clamp(0.95rem,1.5vw,1.2rem)] py-2">
          Busco siempre la <span className="font-semibold">excelencia técnica</span> y el <span className="font-semibold">trabajo en equipo</span>. Creo firmemente en el desarrollo como una forma de crear impacto real, mejorar procesos y ofrecer soluciones elegantes a problemas complejos.
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
