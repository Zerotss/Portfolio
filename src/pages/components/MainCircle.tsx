import InnerCircle from "../../assets/circles/innerCircle.svg?react";
import { motion } from "framer-motion";
import { useAppStore } from "../../stores/AppStore";

export default function MainCircle() {
  const { setState } = useAppStore();

  return (
    <div className="fixed inset-0 flex items-center justify-center opacity-10">
      <motion.div
        style={{ willChange: "transform, opacity" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ opacity: 1, scale: [1.4, 0.9, 1] }}
        transition={{
          scale: { repeat: 0, duration: 0.7, ease: "easeOut" },
          opacity: { repeat: 0, duration: 0.7, ease: "anticipate" },
        }}
        onAnimationComplete={() => {
          setState("Main");
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 180,
            ease: "linear",
          }}
          style={{ willChange: "transform" }}
        >
          <InnerCircle className=" h-[150vmax] w-[143vmax] md:h-[120vmax] md:w-[140vmax] text-gray-400 z-0" />
        </motion.div>
      </motion.div>
    </div>
  );
}
