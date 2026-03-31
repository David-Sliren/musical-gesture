import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layout/MainLayout";
import { HomeView } from "./pages/HomeView";
import { PlayerView } from "./pages/PlayerView";
import { SearchView } from "./pages/SearchView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomeView />,
      },
      {
        path: "player",
        element: <PlayerView />,
      },

      {
        path: "search",
        element: <SearchView />,
      },
    ],
  },
]);
