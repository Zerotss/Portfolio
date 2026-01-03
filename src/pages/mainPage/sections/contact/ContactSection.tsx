import { motion } from "framer-motion";
import SocialIcon from "../../components/SocialIcon";
import { personalData } from "../../../../data/AppData";

interface ContactSectionProps {
  id: string;
}

export default function ContactSection({ id }: ContactSectionProps) {
  return (
    <section
      id={id}
      className="bg-cyan-800 text-cyan-50 px-6 py-28 rounded-2xl m-8"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-celtic text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let’s work together
        </motion.h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          {/* Left: text + email */}
          <div className="space-y-6 text-left">
            <motion.p
              className="text-gray-200 text-lg sm:text-xl max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I’m open to new opportunities, interesting projects and
              collaborations where I can bring value as a full-stack developer.
            </motion.p>

            <a
              href="mailto:donpuentito@gmail.com"
              className="text-xl text-cyan-100 font-light hover:text-cyan-300 transition-colors"
            >
              {personalData.gmail}
            </a>
          </div>

          {/* Right: socials */}
          <div className="flex md:justify-end">
            <div className="flex gap-6">
              <SocialIcon socialName="github" href={personalData.gitHub} />
              <SocialIcon
                socialName="linkedin"
                href={personalData.linkedIn}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
