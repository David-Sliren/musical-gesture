import { tracks } from "./mockTracks";

export const PlayList = tracks.map((item) => item.id).join(",");
