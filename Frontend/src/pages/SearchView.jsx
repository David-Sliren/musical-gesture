import { HandMetal, X, Search } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { SearchField } from "../components/SearchField";
import { ElementFound } from "../components/ElementFound";

export const SearchView = () => {
  //   const navigate = useNavigate();
  return (
    <div className=" fixed top-0 left-0 w-full h-dvh flex flex-col overflow-hidden bg-gray-400 z-30">
      <div className="m-auto flex justify-center items-center rotate-32 ">
        <HandMetal size={500} />
      </div>

      <div className="absolute top-0 left-0  w-full h-full bg-white/80 backdrop-blur-xl  overflow-hidden flex flex-col items-center px-3 gap-4 pt-8">
        <SearchField />
        <ElementFound />
      </div>
    </div>
  );
};
