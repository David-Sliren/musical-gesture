import { motion } from "motion/react";
import { usePlayerStore } from "../store/usePlayerStore";

const HeaderPlaceHolder = () => {
  const currentTrack = usePlayerStore((state) => state.currentTrack);

  return (
    <header className="h-20 w-full flex items-center justify-between px-8 bg-white/70 backdrop-blur-md border-b border-neutral-100 z-20">
      {/* Header placeholder (Search, User Profile, etc) */}
      <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
        Overview
      </h2>
      <motion.div
        className={`w-12 h-12 rounded-full overflow-hidden animate-spin [animation-duration:3s] ${currentTrack?.cover ? "opacity-100" : "opacity-0 animate-none"}`}
      >
        <img
          src={currentTrack?.cover}
          alt="poster"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </header>
  );
};

export default HeaderPlaceHolder;
