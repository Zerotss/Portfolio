import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import MidCircle from "../../../assets/circles/midCircle.svg?react";
import OuterCircle from "../../../assets/circles/outerCircle.svg?react";
import RotatingCircle from "./RotatingCircle";

type AnimatedBackgroundCirclesProps = {
  triggerRef: React.RefObject<(() => void) | null>;
  onExitComplete: () => void;
};

export default function AnimatedBackgroundCircles({
  triggerRef,
  onExitComplete,
}: AnimatedBackgroundCirclesProps) {
  const [stopped, setStopped] = useState(false);
  const [showOuter, setShowOuter] = useState(false);


  const midControls = useAnimation();
  const outerControls = useAnimation();

  // 🔄 Control de parada
  useEffect(() => {
    if (triggerRef) {
      triggerRef.current = async () => {
        setStopped(true);
        await midControls.stop();
        await outerControls.stop();
        onExitComplete();
      };
    }
  }, [triggerRef, midControls, outerControls, onExitComplete]);

  // 🌌 Secuencia optimizada y fluida
  useEffect(() => {
    const sequence = async () => {
      // Etapa 1: Fade-in y aparición suave del círculo medio
      await midControls.start({
        opacity: [0, 1],
        scale: [0.5, 1],
        rotate: 120,
        transition: { duration: 1, ease: [0.6, 0.05, 0.4, 1] },
      });

      // Mostrar el círculo exterior con un pequeño delay
      setShowOuter(true);
      await new Promise((r) => setTimeout(r, 120));


      await Promise.all([
        midControls.start({
          rotate: -60,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: [0.6, 0, 0.4, 1] },
        }),
        outerControls.start({
          opacity: 1,
          scale: [0.8, 1],
          rotate: [0, -30],
          transition: { duration: 0.8, ease: [0.6, 0, 0.4, 1] },
        }),
      ]);
    };

    sequence();
  }, [midControls, outerControls]);

  return (
    <div className="relative w-[100vmax] h-[100vmax] ">
      <motion.div
        style={{ willChange: "transform, opacity" }}
        className="absolute inset-0 flex items-center justify-center"
        animate={midControls}
        initial={{ opacity: 0, scale: 0.5 }}
      >
        <RotatingCircle
          stopped={stopped}
          SVG={MidCircle}
          rotationDirection="clockwise"
          speed={10}
          tailWindStyles="
    w-[32%] h-[32%]
    text-cyan-600
    opacity-80
  "
        />

      </motion.div>

      {showOuter && (
        <motion.div
          style={{ willChange: "transform, opacity" }}
          className="absolute inset-0 flex items-center justify-center"
          animate={outerControls}
          initial={{ opacity: 0, scale: 0.7 }}
        >
          <RotatingCircle
            stopped={stopped}
            SVG={OuterCircle}
            rotationDirection="counterclockwise"
            speed={10}
            tailWindStyles="
    w-[40%] h-[40%]
    text-gray-800
    opacity-60
  "
          />


        </motion.div>
      )}
    </div>
  );
}
