import { motion } from "framer-motion";

export default function WelcomeTitle() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 ">
      <motion.h2
        className="font-medieval text-cyan-800 lg:text-8xl md:text-7xl text-5xl text-center leading-none"
        style={{ willChange: "opacity" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          times: [0, 0.6, 0.8, 1],
          duration:1,
          ease: ["easeInOut", "backOut"],
        }}
      >
        Welcome
      </motion.h2>
    </div>
  );
}