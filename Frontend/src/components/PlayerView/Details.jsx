import { motion } from "motion/react";

export const Details = ({ title, artist }) => {
  return (
    <div>
      <motion.h2
        layoutId="player-title"
        className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 mb-4"
      >
        {title}
      </motion.h2>
      <motion.p
        layoutId="player-artist"
        className="text-xl md:text-2xl text-neutral-500 font-light"
      >
        {artist}
      </motion.p>
    </div>
  );
};
