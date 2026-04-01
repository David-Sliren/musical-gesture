import { motion } from "motion/react";

export const Poster = ({ srcImage }) => {
  return (
    <motion.div
      layoutId="player-cover"
      className="w-full max-w-[400px] aspect-square rounded-[48px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)] bg-neutral-100 [content-s]"
    >
      <img src={srcImage} alt="poster" className="w-full h-full object-cover" />
    </motion.div>
  );
};
