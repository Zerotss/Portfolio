import { personalData } from "../../../../data/AppData";

export default function Footer() {
    return (
      <footer className="px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <p className=" text-cyan-900 text-center md:text-left text-[clamp(0.95rem,1.5vw,1.2rem)] font-medieval font-semibold">
            © {new Date().getFullYear()} {personalData.name}
          </p>
  
          {/* Right */}
          <span className=" text-gray-500 uppercase leading-relaxed font-light text-[clamp(0.95rem,1.5vw,1.2rem)]">
          {personalData.title}
          </span>
        </div>
      </footer>
    );
  }
  