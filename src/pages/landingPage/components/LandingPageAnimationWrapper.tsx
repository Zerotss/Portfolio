import { motion, useAnimation } from "framer-motion";
import { useAppStore } from "../../../stores/AppStore";
import { useEffect } from "react";

export default function LandingPageAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentState, setState } = useAppStore();
  const controls = useAnimation();

  useEffect(() => {
    if (currentState === "TransitionDOWN") {
      controls.start({
        scale: [1, 2],        
        opacity: [1,  0],
        filter: ["blur(0px)", "blur(6px)"],
        transition: { duration:0.9, ease: "easeOut" },
      });
    }
  }, [currentState, controls]);


  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-10 flex justify-center items-center"
      initial={{ scale: 1, opacity: 1}}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
