import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import MidCircle from "../../../circles/midCircle.svg?react";
import OuterCircle from "../../../circles/outerCircle.svg?react";
import RotatingCircle from "./RotatingCircle";

type AnimatedBackgroundCirclesProps = {
  onExitComplete: () => void;
};

const EASE = [1, 0, 0.5, 1] as const;

export default function AnimatedBackgroundCircles({
  onExitComplete,
}: AnimatedBackgroundCirclesProps) {
  const [stopped, setStopped] = useState(false);

  const mid = useAnimation();
  const outer = useAnimation();

  useEffect(() => {
    const run = async () => {
      // Mid entrada
      await mid.start({
        opacity: 1,
        scale: 1,
        rotate: 90,
        transition: { duration: 0.7, ease: EASE },
      });
  
      // Animar ambos
      await Promise.all([
        mid.start({
          rotate: 180,
          transition: { duration: 0.7, ease: EASE },
        }),
        outer.start({
          opacity: 1,
          scale: 1,
          rotate: -20,
          transition: { duration: 0.7, ease: EASE },
        }),
      ]);
  
      setStopped(true);
      onExitComplete();
    };
  
    run();
  }, [mid, outer, onExitComplete]);
  

  return (
    <div className="relative w-[100vmax] h-[100vmax]">
      {/* Mid circle */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
        animate={mid}
        style={{ willChange: "transform, opacity" }}
      >
        <RotatingCircle
          stopped={stopped}
          SVG={MidCircle}
          rotationDirection="clockwise"
          speed={5}
          tailWindStyles="
            w-[32%] h-[32%]
            text-cyan-600
            opacity-80
          "
        />
      </motion.div>

      {/* Outer circle */}
      
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          animate={outer}
          className="absolute inset-0 flex items-center justify-center"
        >
          <RotatingCircle
            stopped={stopped}
            SVG={OuterCircle}
            rotationDirection="counterclockwise"
            speed={5}
            tailWindStyles="
              w-[40%] h-[40%]
              text-gray-500
              opacity-60
            "
          />
        </motion.div>
      
    </div>
  );
}
