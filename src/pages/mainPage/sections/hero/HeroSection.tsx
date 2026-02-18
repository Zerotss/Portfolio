import { motion } from "framer-motion";
import { User } from "lucide-react";
import { personalData } from "../../../../data/AppData";
import SocialIcon from "../../components/SocialIcon";

interface HeroSectionProps {
  id: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  return (
    <section
      id={id}
      className="
      px-20
    sm:px-10 md:px-15 lg:px-20 
    
  "
    >
      <div className="max-w-5xl flex flex-col md:flex-row items-center mx-auto">

        {/* Texto */}
        <div
          className="
      flex-1
      flex flex-col
      items-center md:items-start
       z-10
      text-center md:text-left
      space-y-4
      mt-10 
    "
        >
          <h1 className="text-[clamp(2.3rem,4.5vw,3.8rem)] leading-tight tracking-tight font-medieval text-cyan-600">
            {personalData.name}
          </h1>

          <p className=" text-gray-600 font-light text-[clamp(1.5rem,3.5vw,2.5rem)] ">
            {personalData.title}
          </p>

          <div className="flex gap-4">
            <SocialIcon socialName="github" theme="dark" href={personalData.gitHub} />
            <SocialIcon socialName="linkedin" theme="dark" href={personalData.linkedIn} />
            <SocialIcon socialName="gmail" theme="dark" href={`mailto:${personalData.gmail}`} />
          </div>
          {/*
          <motion.a
            href={personalData.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="
        mt-6
        px-5 py-2
        bg-white
        border-2 border-cyan-600
        text-cyan-600
        rounded-2xl
        inline-flex items-center gap-2
        text-sm sm:text-base md:text-lg
        z-10
      "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <User className="w-4 h-4" />
            Download CV
          </motion.a>
          */}
        </div>

        {/* Imagen */}
        <div className="flex justify-center mt-10 ">
          <img
            src={personalData.profilePicture}
            alt="Profile Picture"
            className="
      w-[20rem] md:w-[25rem]  lg:w-[33rem]
      max-w-full
      drop-shadow-[50px_0_0_#0092b8]
      select-none
    "
          />
        </div>
      </div>
    </section>

  );
}
