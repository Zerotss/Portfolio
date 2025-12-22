import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  // Usamos el store de Zustand
  const { isOpen, openMenu, closeMenu } = useMenuStore();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu(); // cerramos el menú al hacer click en un item
  };

  // Observador de secciones activas
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, [menuItems]);

  // Mostramos el menú según el scroll
  useEffect(() => {
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
  }, [openMenu, closeMenu]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 opacity-80 z-50 backdrop-blur-md bg-white/60 border-b border-indigo-100/50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: isOpen ? 0 : -100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-center items-center space-x-8 relative">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "text-cyan-600"
                  : "text-gray-500 hover:text-cyan-500"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{item.name}</span>

              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-100/50 via-blue-100/50 to-cyan-100/50 rounded-xl"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
