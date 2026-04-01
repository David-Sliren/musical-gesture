import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

export const HeaderInfo = ({ srcSmallPoster, navigateRoute = "/" }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between pb-12 w-full">
      <button
        onClick={() => navigate(navigateRoute)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100/50 hover:bg-neutral-100 text-neutral-900 transition-colors cursor-pointer"
      >
        <ChevronDown strokeWidth={1.5} size={24} />
      </button>
      <div className="flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.2em] text-[#007bff] font-medium mb-1">
          P l a y i n g N o w
        </span>
        <span className="text-sm text-neutral-400">Library</span>
      </div>
      <motion.div className="w-12 h-12 rounded-full overflow-hidden animate-spin [animation-duration:3s] ">
        <img
          src={srcSmallPoster}
          alt="poster"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};
