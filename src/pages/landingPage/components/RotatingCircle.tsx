import { motion, useAnimation, useMotionValue } from "framer-motion";
import React, { useEffect } from "react";

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
  const rotate = useMotionValue(0);
  const rotateDirectionMultiplier = rotationDirection === "clockwise" ? 1 : -1;
  useEffect(() => {
    if (!stopped) {
      controls.start({
        rotate: [rotate.get(), rotate.get() + 360 * rotateDirectionMultiplier],
        transition: { repeat: Infinity, repeatType: "loop", duration: speed, ease: "linear" },
      });
    } else {
      controls.start({
        rotate: rotate.get() - 20 * rotateDirectionMultiplier, // ✅ desde el ángulo real
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [stopped]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={controls}
      style={{ willChange: "transform", transform: "translateZ(0)" }}
    >
      <SVG className={tailWindStyles} />
    </motion.div>
  );
}
export default React.memo(RotatingCircle);
