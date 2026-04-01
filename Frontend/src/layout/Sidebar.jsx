import { Link, useLocation } from "react-router";
import { Home, Compass, Library, Settings, Search } from "lucide-react";
import { Hand } from "lucide-react";
import { HandMetal } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, path: "/" },
  // { name: "Explore", icon: Compass, path: "/explore" },
  // { name: "Library", icon: Library, path: "/library" },
  { name: "Search", icon: Search, path: "/search" },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 h-full hidden md:flex flex-col gap-8 py-10 px-6 border-r border-neutral-100 bg-white">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex justify-center rotate-32 items-center w-8 h-8 rounded-full bg-[#007bff] text-white flex items-center justify-center">
          <HandMetal strokeWidth={1.5} size={19} />
        </div>
        <span className="text-xl font-medium tracking-tight text-neutral-900">
          Gesture Music
        </span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-neutral-50 text-[#007bff] shadow-[0_4px_40px_rgba(0,0,0,0.02)]"
                  : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50/50"
              }`}
            >
              <item.icon strokeWidth={1.5} size={22} />
              <span className="font-medium text-[15px]">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Settings */}
      <div className="pt-6 border-t border-neutral-100">
        <button className="flex items-center gap-4 px-4 py-3 rounded-full w-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50/50 transition-colors">
          <Settings strokeWidth={1.5} size={22} />
          <span className="font-medium text-[15px]">Settings</span>
        </button>
      </div>
    </aside>
  );
};
