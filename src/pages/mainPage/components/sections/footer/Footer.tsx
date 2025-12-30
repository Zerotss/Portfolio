import SocialIcon from "../../SocialIcon";

export default function Footer() {
    return (
      <footer className="px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Ángel Paredes
            <span className="mx-1">·</span>
            All rights reserved.
          </p>
  
          {/* Right */}
          <span className="text-xs text-gray-400 uppercase tracking-wider">
            Full Stack Developer
          </span>
        </div>
      </footer>
    );
  }
  