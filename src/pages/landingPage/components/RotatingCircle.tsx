import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

type RotatingCircleProps = {
  SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  rotationDirection?: "clockwise" | "counterclockwise";
  stopped: boolean;
  speed?: number;
  tailWindStyles?: string;
};

function RotatingCircle({
  SVG,
  stopped = false,
  rotationDirection = "clockwise",
  speed = 60,
  tailWindStyles = "",
}: RotatingCircleProps) {
  const controls = useAnimation();
  const [currentRotation] = useState(0);
  const rotateDirectionMultiplier = rotationDirection === "clockwise" ? 1 : -1;
  useEffect(() => {
    if (!stopped) {
      controls.start({
        rotate: [currentRotation, currentRotation + 360 * rotateDirectionMultiplier],
        transition: {repeat: Infinity,repeatType: "loop",duration: speed,ease: "linear"},
      });
    }else {
      controls.start({
        rotate: currentRotation - 20 * rotateDirectionMultiplier, 
        transition: {
          duration: 1,  
          ease: "easeOut",
        },
      })
    }
  }, [stopped, rotateDirectionMultiplier, controls]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={controls}
    >
      <SVG className={tailWindStyles} />
    </motion.div>
  );
}
export default React.memo(RotatingCircle);
