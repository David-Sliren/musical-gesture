import { Pause, Play, SkipBack, SkipForward } from "lucide-react";

export const Controls = ({
  togglePlay,
  isPlaying,
  handlerNext,
  handlerPrevious,
}) => {
  return (
    <div className="flex items-center gap-8 pt-4 cursor-pointer">
      <button
        className="text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
        onClick={handlerPrevious}
      >
        <SkipBack strokeWidth={1.5} size={28} />
      </button>

      <button
        onClick={togglePlay}
        className="w-20 h-20 flex items-center justify-center rounded-full bg-neutral-900 shadow-xl hover:bg-[#007bff] text-white hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        {isPlaying ? (
          <Pause strokeWidth={1.5} size={32} fill="currentColor" />
        ) : (
          <Play
            strokeWidth={1.5}
            size={32}
            fill="currentColor"
            className="ml-1"
          />
        )}
      </button>

      <button
        className="text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
        onClick={handlerNext}
      >
        <SkipForward strokeWidth={1.5} size={28} />
      </button>
    </div>
  );
};
