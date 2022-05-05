import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "../reducer";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [{likedVideos, watchLater, history, option}, playlistDispatch] = useReducer(playlistReducer, { likedVideos: [], watchLater: [], history: [], option: "" });

  const addToLikedVideo = async (video) => {
    try{
      const {data: likes} = await axios.post("/api/user/likes", {video}, 
      {
        headers: { authorization: localStorage.getItem("token") },
      });
      console.log("Added to Liked Video -", likes);
      localStorage.setItem("likes", JSON.stringify(likes))
      playlistDispatch({
            type: "LIKED",
            payload: video
      });
      
    }catch(error){
      console.log("From playlist context-", error)
    }
  }

  const removeFromLikedVideo = async (video) => {
    try{
      const removedVideo = await axios.delete(`/api/user/likes/${video._id}`, 
      {
        headers: { authorization: localStorage.getItem("token") },
      })
      console.log("Removed From Liked Video -", removedVideo)
      playlistDispatch({
          type: "REMOVE_FROM_LIKE",
          payload: video
        });
    }catch(error){
      console.log(error);
    }
  }


  return (
    <PlaylistContext.Provider value={{ likedVideos, watchLater, history, option, playlistDispatch, addToLikedVideo, removeFromLikedVideo }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
