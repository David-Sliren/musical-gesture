import { Play } from "lucide-react";
import { motion } from "motion/react";

export const Track = ({ track, index, isCurrent, handler }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index < 8 ? index * 0.1 : Math.min(index * 0.02, 0.4),
      }}
      viewport={{ once: true, margin: "500px", amount: 0.1 }}
      className="group cursor-pointer flex flex-col gap-4"
      onClick={handler}
    >
      <div className="relative w-full aspect-square rounded-[32px] overflow-hidden bg-neutral-100 shadow-[0_4px_40px_rgba(0,0,0,0.03)] transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] group-hover:-translate-y-2">
        <img
          src={track.cover}
          alt={track.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${isCurrent ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        >
          <div className="w-16 h-16 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-[#007bff] transform transition-transform duration-300 hover:scale-110">
            <Play fill="currentColor" size={24} className="ml-1" />
          </div>
        </div>
      </div>

      <div className="px-2">
        <h3 className="text-lg font-medium text-neutral-900 truncate">
          {track.title}
        </h3>
        <p className="text-sm text-neutral-500 font-light">{track.artist}</p>
      </div>
    </motion.div>
  );
};
