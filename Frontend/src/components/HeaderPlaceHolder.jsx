import { Search } from "lucide-react";

const HeaderPlaceHolder = () => {
  return (
    <header className="h-20 w-full flex items-center justify-between px-8 bg-white/70 backdrop-blur-md border-b border-neutral-100 z-20">
      {/* Header placeholder (Search, User Profile, etc) */}
      <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
        Overview
      </h2>
      <div className="w-10 h-10 bg-neutral-100 rounded-full"></div>
    </header>
  );
};

export default HeaderPlaceHolder;
