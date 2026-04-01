import { motion } from "motion/react";
import { formatTime } from "../../utils/formatTime";
import { usePlayerStore } from "../../store/usePlayerStore";
import { useEffect } from "react";
import { useState } from "react";

export const TimeLine = () => {
  const currentTime = usePlayerStore((state) => state.currentTime);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const setCurrentTime = usePlayerStore((state) => state.setCurrentTime);
  const duration = usePlayerStore((state) => state.duration);
  const [porcent, setPorcent] = useState(0);

  useEffect(() => {
    let timer;

    if (currentTime === duration) {
      setCurrentTime(0);
      return clearTimeout(timer);
    }

    if (!isPlaying) {
      return () => clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setCurrentTime(currentTime + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [duration, currentTime, setCurrentTime, isPlaying]);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full bg-neutral-100 rounded-full overflow-hidden">
        <motion.input
          type="range"
          min={0}
          max={duration || 100}
          className="h-full  w-full accent-[#007bff] cursor-pointer rounded-full overflow-hidden"
          value={porcent}
          onChange={() => setPorcent(currentTime)}
        />
      </div>
      <div className="flex justify-between text-xs text-neutral-400 font-medium">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};
