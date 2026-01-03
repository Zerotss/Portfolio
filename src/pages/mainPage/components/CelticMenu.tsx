import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMenuStore from "../../../stores/MenuStore";

export type MenuItem = {
  id: string;
  name: string;
};

type CelticMenuProps = {
  menuItems: MenuItem[];
};

export default function CelticMenu({ menuItems }: CelticMenuProps) {
  const [activeSection, setActiveSection] = useState("intro");
  const { isOpen, openMenu, closeMenu, isMobile, setIsMobile } = useMenuStore();
  const scrollingRef = useRef<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollingRef.current = sectionId;

    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });

    if (isMobile) closeMenu();
  };
  //Mobile Observer
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Section Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (scrollingRef.current) {
            if (scrollingRef.current === entry.target.id) {
              setActiveSection(entry.target.id);
              scrollingRef.current = null;
            }
          } else {
            setActiveSection(entry.target.id);
          }
        }
      });
    });

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

  }, [menuItems]);

  //Menu Scroll and mobile checker
  useEffect(() => {
    if (isMobile) {
      closeMenu()
      return
    }
    if (!isMobile) {
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
          openMenu();
        } else {
          closeMenu();
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [openMenu, closeMenu, isMobile]);

  return (

    <motion.nav
      className={`fixed z-150 ${isMobile ? "top-4 right-4" : "top-0 left-0 right-0"} ${isMobile ? "" : "opacity-80 backdrop-blur-md bg-white/70 border-b border-indigo-100/50 shadow-sm"
        }`}
      initial={{ y: isMobile ? 0 : -100 }}
      animate={{ y: isMobile ? 0 : isOpen ? 0 : -100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {
        //Mobile
        isMobile ? (
          <div className="relative">
            <button
              onClick={isOpen ? closeMenu : openMenu}
              className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center border border-gray-300 shadow-md"
            >
              <div className="space-y-1">
                <span
                  className={`block w-6 h-0.5 bg-cyan-600 transform transition duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-cyan-600 transition duration-300 ${isOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-cyan-600 transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                />
              </div>
            </button>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-14 right-0 flex flex-col space-y-2 bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-4"
              >
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 text-sm  text-left rounded-md transition-colors duration-200 ${activeSection === item.id
                      ? "text-cyan-600"
                      : "text-gray-500 hover:text-cyan-500"
                      }`}
                  >
                    {item.name}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        ) : (
          //Desktop
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex justify-center items-center space-x-8 relative">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medieval font-semibold transition-all duration-300 ${activeSection === item.id
                    ? "text-cyan-600"
                    : "text-gray-500 hover:text-cyan-500"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-160">{item.name}</span>

                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/50 via-blue-100/50 to-cyan-100/50 rounded-xl" />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        )}
    </motion.nav>
  );
}
