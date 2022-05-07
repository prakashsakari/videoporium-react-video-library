import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { playlistReducer } from "../reducer";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [{likedVideos, watchLater, history, playlists, option}, playlistDispatch] = useReducer(playlistReducer, { likedVideos: [], watchLater: [], history: [], playlists: [], option: "" });

  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem("likes"));
    likes && likes.length > 0 && likes.map(video => playlistDispatch({
      type: "LIKED",
      payload: video
    }));
  }, [])

  useEffect(() => {
    const watchlater = JSON.parse(localStorage.getItem("watchlater"));
    watchlater && watchlater.length > 0 && watchlater.map(video => playlistDispatch({
      type: "WATCH_LATER",
      payload: video
    }));
  }, [])

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("history"));
    history && history.length > 0 && history.map(video => playlistDispatch({
      type: "HISTORY",
      payload: video
    }));
    
  }, [])

  useEffect(() => {
    const playlists = JSON.parse(localStorage.getItem("playlists"));
    console.log("Playlist on render-", playlists);
    playlists && playlists.length > 0 && playlistDispatch({
      type: "SET_PLAYLIST",
      payload: playlists
    })
  }, [])

  useEffect(() => {
    const value = localStorage.getItem("option");
    value && playlistDispatch({
      type: "SET_OPTION",
      payload: value
    })
    localStorage.setItem("option", value)
  }, [])

  useEffect(() => {
    localStorage.setItem("option", option);
  })


  return (
    <PlaylistContext.Provider value={{ likedVideos, watchLater, history, playlists, option, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
