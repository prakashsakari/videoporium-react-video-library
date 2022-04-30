import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "../reducer";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [{likedVideos, watchLater, history, option}, playlistDispatch] = useReducer(playlistReducer, { likedVideos: [], watchLater: [], history: [], option: "" });
  return (
    <PlaylistContext.Provider value={{ likedVideos, watchLater, history, option, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };