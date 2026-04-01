import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { FloatingPlayer } from "../components/FloatingPlayer";
import GlobalPlaying from "../components/GlobalPlaying";
import HeaderPlaceHolder from "../components/HeaderPlaceHolder";
import { AnimatePresence } from "motion/react";

export const MainLayout = () => {
  const location = useLocation();
  return (
    <>
      <div className="flex h-screen text-neutral-900 font-sans selection:bg-[#007bff]/20">
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-white/50">
          <HeaderPlaceHolder />
          <div className="flex-1 overflow-y-auto px-8 py-6 ">
            <AnimatePresence mode="await">
              <Outlet key={location.pathname} />
            </AnimatePresence>
          </div>
        </main>
      </div>
      <GlobalPlaying />
      <FloatingPlayer />
    </>
  );
};
