import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Play, Pause, Maximize2 } from "lucide-react";
import { usePlayerStore } from "../store/usePlayerStore";
import YouTube from "react-youtube";

export const FloatingPlayer = () => {
  const play = usePlayerStore((state) => state.play);
  const pause = usePlayerStore((state) => state.pause);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const navigate = useNavigate();

  if (!currentTrack) return null;

  // console.log(player);
  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    // setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      layoutId="player-container"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-20 bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_60px_rgba(0,0,0,0.08)] rounded-[40px] z-50 overflow-hidden flex items-center px-3 gap-4"
    >
      {/* Cover */}
      <motion.div
        layoutId="player-cover"
        className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 cursor-pointer"
        onClick={() => navigate("/player")}
      >
        <img
          src={currentTrack.cover}
          alt="cover"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Info */}
      <div
        className="flex-1 min-w-0 cursor-pointer"
        onClick={() => navigate("/player")}
      >
        <motion.h4
          layoutId="player-title"
          className="text-[15px] font-medium text-neutral-900 truncate"
        >
          {currentTrack.title}
        </motion.h4>
        <motion.p
          layoutId="player-artist"
          className="text-[13px] text-neutral-500 truncate"
        >
          {currentTrack.artist}
        </motion.p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 pr-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            // setIsPlaying(!isPlaying);
            togglePlay();
          }}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-[#007bff] text-neutral-900 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          {isPlaying ? (
            <Pause strokeWidth={1.5} size={20} fill="currentColor" />
          ) : (
            <Play
              strokeWidth={1.5}
              size={20}
              fill="currentColor"
              className="ml-0.5"
            />
          )}
        </button>
        <button
          onClick={() => navigate("/player")}
          className="w-10 h-10 flex items-center justify-center rounded-full text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
        >
          <Maximize2 strokeWidth={1.5} size={18} />
        </button>
      </div>
    </motion.div>
  );
};
