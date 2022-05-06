import axios from "axios";

const addToWatchLater = async (video) => {
    try{
      const {data: {watchlater}} = await axios.post("/api/user/watchlater", {video}, 
      {
        headers: { authorization: localStorage.getItem("token") },
      });
      localStorage.setItem("watchlater", JSON.stringify(watchlater));
      return watchlater;
    }catch(err){
      console.log(err)
    }
}

const removeFromWatchLater = async (video) => {
    try{
        const {data: {watchlater}} = await axios.delete(`/api/user/watchlater/${video._id}`, 
        {
        headers: { authorization: localStorage.getItem("token") },
        })
        localStorage.setItem("watchlater", JSON.stringify(watchlater))
        return watchlater
    }catch(err){
        console.log(err)
    }
}

export {addToWatchLater, removeFromWatchLater};