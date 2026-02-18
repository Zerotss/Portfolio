import { personalData } from "../../../../data/AppData";
import SocialIcon from "../../components/SocialIcon";

interface ContactSectionProps {
  id: string;
}

export default function ContactSection({ id }: ContactSectionProps) {
  return (
    <section
      id={id}
      className="
        flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-10 lg:px-20
        py-16 sm:py-24
      "
    >
      <div className="relative max-w-5xl w-full bg-cyan-800 rounded-4xl p-6 sm:p-10 md:p-16 flex flex-col gap-10 text-center md:text-left">
        {/* Title */}
        <h2
          className="font-medieval text-[clamp(2.53rem,5vw,3.8rem)] text-white"
        >
          Let’s work together
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-start">
          {/* Left: text + email */}
          <div className="space-y-4 sm:space-y-6">
            <p
              className="text-cyan-100 leading-relaxed text-[clamp(0.95rem,1.5vw,1.2rem)] "
            >
                I enjoy building things with a team and tackling challenges together. If there’s an opportunity to contribute and grow, I’d love to be part of it.

            </p>

            <a
              href={`mailto:${personalData.gmail}`}
              className="
                inline-block
                text-lg sm:text-xl md:text-2xl
                font-light
                text-emerald-200
                hover:text-cyan-400
                transition-colors duration-300
              "
            >
              {personalData.gmail}
            </a>
          </div>

          {/* Right: socials */}
          <div className="flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <div className="flex gap-6">
              <SocialIcon socialName="github" theme="light" href={personalData.gitHub} />
              <SocialIcon socialName="linkedin" theme="light" href={personalData.linkedIn} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
