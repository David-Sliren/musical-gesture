import { Search, X } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

export const SearchField = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      //   layoutId="player-container"
      // initial={{ height: "80px", width: "80px" }}
      // animate={{ height: "80px", width: "600px" }}
      className=" w-[90%] md:w-[600px] h-20 bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_60px_rgba(0,0,0,0.08)] rounded-[40px] z-50 overflow-hidden flex items-center px-3 gap-4"
    >
      {/* Cover */}
      <div
        // layoutId="player-cover"
        className="w-14 h-14 flex items-center justify-center rounded-full overflow-hidden flex-shrink-0 cursor-pointer"
        // onClick={() => navigate("/player")}
      >
        <Search size={25} />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 cursor-pointer">
        <input
          type="text"
          className="py-5 pr-5 w-full h-12 text-lg text-black outline-0"
          placeholder="Search"
        />
      </div>

      {/* Controls */}
      <div
        className="flex items-center gap-3 pr-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <X size={25} />
      </div>
    </motion.div>
  );
};
