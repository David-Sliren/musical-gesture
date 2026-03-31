import { motion } from "motion/react";
import { usePlayerStore } from "../store/usePlayerStore";
import YouTube from "react-youtube";
import { useRef } from "react";

const GlobalPlaying = () => {
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const setPlayer = usePlayerStore((state) => state.setPlayer);
  //   const currentTime = usePlayerStore((state) => state.setPlayer);
  const setCurrentTime = usePlayerStore((state) => state.setCurrentTime);
  const intervalRef = useRef(null);

  if (!currentTrack) return null;

  //   console.log("player: ", player);

  const onPlayerReady = (event) => {
    // event.target;
    // event.target;
    console.log("event.target: ", event.target);
    setPlayer(event.target);
    console.log("event.target: ", event.target.getVideoData());
    console.log("el tiempo que va: ", event.target.getCurrentTime());

    console.log("cuanto dura: ", event.target.getDuration());
  };

  const handlePlay = (event) => {
    intervalRef.current = setInterval(() => {
      setCurrentTime(event.target.getCurrentTime());
    }, 1000);
  };

  const handleStop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <motion.div
      layoutId="youtube-container"
      className="sr-only pointer-events-none"
    >
      <YouTube
        videoId={currentTrack.id}
        opts={{
          height: "0",
          width: "0",
          playerVars: {
            autoplay: 1,
            controls: 0,
          },
        }}
        onReady={onPlayerReady}
        // onStateChange={onPlayerStateChange}
      />
    </motion.div>
  );
};

export default GlobalPlaying;
