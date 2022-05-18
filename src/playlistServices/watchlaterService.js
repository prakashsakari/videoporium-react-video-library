import axios from "axios";

const addToWatchLater = async (video, setAlert) => {
    try{
      const {data: {watchlater}} = await axios.post("/api/user/watchlater", {video}, 
      {
        headers: { authorization: localStorage.getItem("token") },
      });
      localStorage.setItem("watchlater", JSON.stringify(watchlater));
      setAlert({
        open: true,
        message: "Video Added To WatchLater",
        type: "success"
      })
      return watchlater;
    }catch(err){
      setAlert({
        open: true,
        message: "Something went wrong",
        type: "error"
      })
    }
}

const removeFromWatchLater = async (video, setAlert) => {
    try{
        const {data: {watchlater}} = await axios.delete(`/api/user/watchlater/${video._id}`, 
        {
        headers: { authorization: localStorage.getItem("token") },
        })
        localStorage.setItem("watchlater", JSON.stringify(watchlater))
        setAlert({
          open: true,
          message: "Video Removed From WatchLater",
          type: "success"
        })
        return watchlater
    }catch(err){
        setAlert({
            open: true,
            message: "Something went wrong",
            type: "error"
        })
    }
}

export {addToWatchLater, removeFromWatchLater};