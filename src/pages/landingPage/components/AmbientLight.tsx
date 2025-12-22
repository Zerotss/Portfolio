import { motion, useAnimation } from "framer-motion";
import { useAppStore } from "../../../stores/AppStore";
import { useEffect } from "react";

export default function AmbientLight() {
  const { currentState } = useAppStore();
  const controls = useAnimation();
  const particleControls = useAnimation();

  // ✨ Pulso suave (respira luz)
  useEffect(() => {
    const pulseLoop = async () => {
      await controls.start({
        scale: 1,
        opacity: 0.75,
        transition: { duration: 3, ease: [0.45, 0, 0.2, 1] },
      });
      while (true) {
        await controls.start({
          scale: [1, 1.05, 1],
          opacity: [0.75, 0.9, 0.75],
          transition: { duration: 8, ease: [0.4, 0, 0.6, 1] },
        });
      }
    };
    pulseLoop();
  }, [controls]);

  // 🌫️ Halo central suave y etéreo
  useEffect(() => {
    const loop = async () => {
      while (true) {
        await particleControls.start({
          scale: [0.95, 1.08, 0.95],
          opacity: [0.5, 0.8, 0.5],
          rotate: [0, 1, -1, 0],
          transition: { duration: 9, ease: [0.4, 0, 0.2, 1] },
        });
      }
    };
    loop();
  }, [particleControls]);

  // ⚡ Destello breve durante transición
  useEffect(() => {
    const flash = async () => {
      if (currentState === "TransitionDOWN") {
        await controls.start({
          scale: 1.25,
          opacity: 0.95,
          filter: "blur(30px) brightness(1.05)",
          transition: { duration: 0.8, ease: [0.45, 0, 0.2, 1] },
        });
        await controls.start({
          scale: 1,
          opacity: 0.8,
          filter: "blur(22px) brightness(1)",
          transition: { duration: 2.8, ease: [0.4, 0, 0.2, 1] },
        });
      }
    };
    flash();
  }, [currentState, controls]);

  // 🌥️ Mostrar / ocultar según estado
  useEffect(() => {
    if (currentState === "Landing" || currentState === "TransitionDOWN") {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [currentState, controls]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* 🌤️ Luz difusa blanca (menos saturada) */}
      <motion.div
        className="absolute inset-0"
        animate={controls}
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 50% 50%,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(240, 245, 250, 0.65) 35%,
              rgba(225, 235, 245, 0.35) 70%,
              rgba(210, 220, 230, 0.2) 90%,
              transparent 100%
            )
          `,
          backgroundBlendMode: "soft-light",
          filter: "blur(25px) saturate(90%)",
          backgroundSize: "150% 150%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          willChange: "transform, opacity",
        }}
      />

      {/* 🌕 Halo central perlado y suave */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={particleControls}
          className="relative w-[30rem] h-[30rem]"
          style={{ willChange: "transform, opacity" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.85, 0.5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              background: `
                radial-gradient(
                  circle,
                  rgba(255, 255, 255, 0.9) 0%,
                  rgba(245, 250, 255, 0.6) 40%,
                  rgba(230, 235, 245, 0.3) 80%,
                  transparent 100%
                )
              `,
              filter: "blur(100px)",
              mixBlendMode: "screen",
            }}
          />
        </motion.div>
      </div>

      {/* 🌈 Reflejo translúcido muy tenue */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(
              120deg,
              rgba(255, 255, 255, 0.12),
              rgba(240, 245, 255, 0.18),
              rgba(245, 250, 255, 0.1)
            )
          `,
          backgroundSize: "300% 300%",
          mixBlendMode: "soft-light",
          filter: "blur(45px)",
        }}
      />
    </div>
  );
}
