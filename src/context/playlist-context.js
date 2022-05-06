import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { playlistReducer } from "../reducer";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [{likedVideos, watchLater, history, option}, playlistDispatch] = useReducer(playlistReducer, { likedVideos: [], watchLater: [], history: [], option: "" });

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("likes" ?? ""))){
      const likes = JSON.parse(localStorage.getItem("likes"));
      likes && likes.length > 0 && likes.map(video => playlistDispatch({
        type: "LIKED",
        payload: video
      }));
    }
  }, [])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("watchlater" ?? ""))){
      const watchlater = JSON.parse(localStorage.getItem("watchlater" ?? ""));
      watchlater && watchlater.length > 0 && watchlater.map(video => playlistDispatch({
        type: "WATCH_LATER",
        payload: video
      }));
    }
  }, [])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("history" ?? ""))){
      const history = JSON.parse(localStorage.getItem("history" ?? ""));
      history && history.length > 0 && history.map(video => playlistDispatch({
        type: "HISTORY",
        payload: video
      }));
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem("option" ?? "")){
      const value = localStorage.getItem("option");
      value && playlistDispatch({
        type: "SET_OPTION",
        payload: value
      })
      localStorage.setItem("option", value)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("option", option);
  }, )


  return (
    <PlaylistContext.Provider value={{ likedVideos, watchLater, history, option, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
