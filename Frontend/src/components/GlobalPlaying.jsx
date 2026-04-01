import { motion } from "motion/react";
import { usePlayerStore } from "../store/usePlayerStore";
import YouTube from "react-youtube";
import { useRef } from "react";
import { PlayList } from "../data/usePlayList";
import { tracks } from "../data/mockTracks";

const GlobalPlaying = () => {
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const setPlayer = usePlayerStore((state) => state.setPlayer);
  const setStateChange = usePlayerStore((state) => state.setStateChange);

  if (!currentTrack) return null;

  const onPlayerReady = (event) => {
    setPlayer(event.target);
  };

  const onshange = (event) => {
    if (event.data === 2) {
      const videoid = event.target?.getVideoData().video_id;
      if (currentTrack.id === videoid) {
        return console.log("hola");
      }
      console.log("videoid: ", videoid);
      console.log("currentTrack.id: ", currentTrack.id);
      // console.log("si: ", event.target.getPlaylist());
      // const findId = tracks.find((item) => item.id === videoid);
      // setStateChange(findId);
    }
    // setPlayer(event.target);
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
            playlist: PlayList,
          },
        }}
        onReady={onPlayerReady}
        onStateChange={onshange}
      />
    </motion.div>
  );
};

export default GlobalPlaying;
