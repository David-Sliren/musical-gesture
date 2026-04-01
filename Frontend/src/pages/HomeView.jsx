import { Play } from "lucide-react";
import { usePlayerStore } from "../store/usePlayerStore";
import { tracks } from "../data/mockTracks";
import { motion } from "motion/react";
import { Track } from "../components/Track";
import { useNavigate } from "react-router";

export const HomeView = () => {
  const playTrack = usePlayerStore((state) => state.playTrack);
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const navigate = useNavigate();

  return (
    <div className="w-full pb-32 pb-40">
      <div className="mb-10">
        <h1 className="text-4xl font-light tracking-tight text-neutral-900 mb-2">
          Discover
        </h1>
        <p className="text-neutral-500 font-light">
          The future of sound is in your hands.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tracks.map((track, idx) => {
          const isCurrentlyPlaying = currentTrack?.id === track.id && isPlaying;

          return (
            <Track
              key={track.id + idx}
              track={track}
              index={idx}
              isCurrent={isCurrentlyPlaying}
              handler={() => {
                (playTrack(track), navigate("/player"));
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
