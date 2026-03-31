import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import { tracks } from "../data/mockTracks";
import {
  ChevronDown,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Hand,
} from "lucide-react";
import { usePlayerStore } from "../store/usePlayerStore";

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

  function handlerNext() {
    next();
  }

  function handlerPrevius() {
    previous();
  }

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return (
    <motion.div
      layoutId="player-container"
      className=" fixed inset-0 bg-white z-[100] flex flex-col overflow-hidden"
    >
      <div className="flex-1 flex flex-col px-8 py-10 max-w-5xl mx-auto w-full relative">
        {/* Superior */}
        <div className="flex items-center justify-between pb-12 w-full">
          <button
            onClick={() => navigate("/")}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100/50 hover:bg-neutral-100 text-neutral-900 transition-colors"
          >
            <ChevronDown strokeWidth={1.5} size={24} />
          </button>
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#007bff] font-medium mb-1">
              P l a y i n g N o w
            </span>
            <span className="text-sm text-neutral-400">Library</span>
          </div>
          <div className="w-12 h-12"></div> {/* Spacer balance */}
        </div>

        {/* Centro - Contenido inmersivo */}
        <div className="flex-1 flex flex-col md:flex-row items-center gap-16 w-full justify-center">
          {/* Cover Art Expansible */}
          <motion.div
            layoutId="player-cover"
            className="w-full max-w-[400px] aspect-square rounded-[48px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)] bg-neutral-100 [content-s]"
          >
            <img
              src={currentTrack.cover}
              alt="cover"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Detalles y Controles */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-10 flex-1 max-w-md">
            <div>
              <motion.h2
                layoutId="player-title"
                className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 mb-4"
              >
                {currentTrack.title}
              </motion.h2>
              <motion.p
                layoutId="player-artist"
                className="text-xl md:text-2xl text-neutral-500 font-light"
              >
                {currentTrack.artist}
              </motion.p>
            </div>

            {/* Falso timeline para el diseño wow */}
            <div className="w-full flex flex-col gap-2">
              <div className="w-full h-1 bg-neutral-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#007bff] rounded-full"
                  initial={{ width: "30%" }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 60, ease: "linear" }}
                />
              </div>
              <div className="flex justify-between text-xs text-neutral-400 font-medium">
                <span>1:24</span>
                <span>3:45</span>
              </div>
            </div>

            {/* Controles */}
            <div className="flex items-center gap-8 pt-4 ">
              <button
                className="text-neutral-400 hover:text-neutral-900 transition-colors"
                onClick={handlerPrevius}
              >
                <SkipBack strokeWidth={1.5} size={28} />
              </button>

              <button
                onClick={togglePlay}
                className="w-20 h-20 flex items-center justify-center rounded-full bg-neutral-900 shadow-xl hover:bg-[#007bff] text-white hover:scale-105 transition-all duration-300"
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
                className="text-neutral-400 hover:text-neutral-900 transition-colors"
                onClick={handlerNext}
              >
                <SkipForward strokeWidth={1.5} size={28} />
              </button>
            </div>

            {/* Gesture Indicator Demo */}
            <div className="flex items-center gap-2 mt-8 px-5 py-2.5 rounded-full bg-neutral-50 text-neutral-500 text-sm font-medium">
              <Hand strokeWidth={1.5} size={16} />
              <span>Gesture Control Active</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
