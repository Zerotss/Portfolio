import { motion } from "framer-motion";
import { User } from "lucide-react";
import perfil from "../../../../../assets/imgs/Perfil_nobg.webp"
import SocialIcon from "../../SocialIcon";

interface HeroSectionProps {
  id: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  return (
    <section
      id={id}
      className="flex flex-col lg:flex-row px-6 lg:px-20 mx-auto min-h-[50vh] max-w-6xl"
    >
      {/* Texto (izquierda) */}
      <div className="flex-1 flex flex-col justify-center md:justify-end mt-10 xl:mt-0 space-y-4 text-center lg:text-left">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-celtic text-cyan-600">
          Ángel Paredes Ballesteros
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-600 font-light">
          Full Stack Developer
        </p>

        {/* Redes sociales */}
        <div className="flex justify-center lg:justify-start gap-4">
          <SocialIcon icon="github" href="https://github.com/Zerotss" color="gray" />
          <SocialIcon
            icon="linkedin"
            href="https://www.linkedin.com/in/%C3%A1ngel-paredes-ballesteros-120732292/"
            color="blue"
          />
          <SocialIcon
            icon="gmail"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=donpuentito@gmail.com"
            color="red"
          />
        </div>

        {/* Botón CV */}
        <motion.button
          className="mt-4 mb-4 px-5 py-2 sm:px-6 sm:py-3 bg-white border-2 border-cyan-600 text-cyan-600 rounded-2xl hover:bg-cyan-50 transition-all inline-flex items-center gap-2 self-center lg:self-start text-sm sm:text-base md:text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" /> Descargar CV
        </motion.button>
      </div>

      {/* Imagen (derecha) */}
      <div className="flex-1 flex justify-center lg:justify-end items-end">
        <img
          src={perfil}
          loading="lazy"
          alt="Perfil"
          className="w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[35rem] xl:w-[35rem] 2xl:w-[35rem] h-auto drop-shadow-[50px_0_0_#0092b8] select-none"
          style={{ display: "block" }}
        />
      </div>
    </section>
  );
}
