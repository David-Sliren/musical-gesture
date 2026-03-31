import { motion } from "motion/react";
import { usePlayerStore } from "../store/usePlayerStore";
import { FloatingPlayer } from "../components/FloatingPlayer";
import GlobalPlaying from "../components/GlobalPlaying";
import { Outlet } from "react-router";

export const AnimatedBackground = ({ children }) => {
  const isPlaying = usePlayerStore((state) => state.isPlaying);

  return (
    <div className="relative w-full h-full min-h-screen bg-white overflow-hidden">
      {/* 
        Efecto vivo / Respiración: 
        Un borde suave que parpadea lentamente cuando isPlaying es true.
        Usa sombras orgánicas extremadamente suaves y un azul vibrante difuminado. 
      */}
      {/* <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          boxShadow: isPlaying
            ? [
                "inset 0 0 0px rgba(0, 123, 255, 0)",
                "inset 0 0 120px rgba(0, 123, 255, 0.05)",
                "inset 0 0 0px rgba(0, 123, 255, 0)",
              ]
            : "inset 0 0 0px rgba(0, 123, 255, 0)",
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ zIndex: 0 }}
      /> */}

      {/* Contenido principal, siempre encima */}
      <div className=" relative z-10 w-screen h-screen">{children}</div>
    </div>
  );
};
