import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { TimeLine } from "../components/PlayerView/TimeLine";

import { usePlayerStore } from "../store/usePlayerStore";
import { Details } from "../components/PlayerView/Details";
import { Controls } from "../components/PlayerView/Controls";
import { GestureButton } from "../components/PlayerView/GestureButton";
import { Poster } from "../components/PlayerView/Poster";
import { HeaderInfo } from "../components/PlayerView/HeaderInfo";

export const PlayerView = () => {
  const navigate = useNavigate();
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const pause = usePlayerStore((state) => state.pause);
  const play = usePlayerStore((state) => state.play);
  const previous = usePlayerStore((state) => state.previous);
  const next = usePlayerStore((state) => state.next);

  // Redirigir si no hay track
  useEffect(() => {
    if (!currentTrack) {
      navigate("/");
    }
  }, [currentTrack, navigate]);

  if (!currentTrack) return null;

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return (
    <motion.main
      layoutId="player-container"
      className=" fixed inset-0 bg-white z-[100] flex flex-col overflow-hidden"
    >
      <div className="flex-1 flex flex-col px-8 py-10 max-w-5xl mx-auto w-full relative">
        <HeaderInfo navigateRoute="/" srcSmallPoster={currentTrack.cover} />

        <div className="flex-1 flex flex-col md:flex-row items-center gap-16 w-full justify-center">
          <Poster srcImage={currentTrack.cover} />

          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-10 flex-1 max-w-md">
            <Details title={currentTrack.title} artist={currentTrack.artist} />

            <TimeLine />

            <Controls
              handlerNext={() => next()}
              handlerPrevious={() => previous()}
              isPlaying={isPlaying}
              togglePlay={togglePlay}
            />
            <GestureButton />
          </div>
        </div>
      </div>
    </motion.main>
  );
};
