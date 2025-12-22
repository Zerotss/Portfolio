import { technologies } from "../../../../../data/AppData";
import Tag from "../../Tag";

interface AboutSectionProps {
  id: string;
}

export default function AboutSection({ id }: AboutSectionProps) {
  return (
    <section
      id={id}
      className="bg-cyan-600 text-white px-6 md:px-12 lg:px-20 py-16 md:py-20 flex flex-col items-center justify-center space-y-10 relative z-10"
    >
      <div className="max-w-6xl text-center md:text-left space-y-4 md:space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Sobre mí
        </h2>
        <p className="leading-relaxed text-base sm:text-lg md:text-lg lg:text-xl">
          Soy un <span className="font-semibold">desarrollador junior</span> comprometido y con experiencia en la creación de aplicaciones móviles, especialmente utilizando <span className="font-semibold">Jetpack Compose</span> y <span className="font-semibold">Clean Architecture</span>. Me apasiona crear código limpio, escalable y eficiente.
        </p>
        <p className="leading-relaxed text-base sm:text-lg md:text-lg lg:text-xl">
          Busco siempre la <span className="font-semibold">excelencia técnica</span> y el <span className="font-semibold">trabajo en equipo</span>. Creo firmemente en el desarrollo como una forma de crear impacto real, mejorar procesos y ofrecer soluciones elegantes a problemas complejos.
        </p>
      </div>

      {/* Tags / Skills */}
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
        {technologies.map((tech) => (
          <Tag key={tech} icon={tech} size="md" />
        ))}
      </div>
    </section>
  );
}
