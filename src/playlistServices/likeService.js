import axios from "axios";

const addToLikedVideo = async (video, setAlert) => {
    try{
      const {data: {likes}} = await axios.post("/api/user/likes", {video}, 
      {
        headers: { authorization: localStorage.getItem("token") },
      });
      localStorage.setItem("likes", JSON.stringify(likes));
      setAlert({
        open: true,
        message: "Video Added To Liked Videos",
        type: "success"
      })
      return likes
    }catch(err){
      setAlert({
        open: true,
        message: "Something went wrong",
        type: "error"
    })
    }
}

const removeFromLikedVideo = async (video, setAlert) => {
    try{
        const {data: {likes}} = await axios.delete(`/api/user/likes/${video._id}`, 
        {
        headers: { authorization: localStorage.getItem("token") },
        })
        localStorage.setItem("likes", JSON.stringify(likes))
        setAlert({
          open: true,
          message: "Video Removed From Liked Videos",
          type: "success"
        })
        return likes
    }catch(err){
      setAlert({
        open: true,
        message: "Something went wrong",
        type: "error"
    })
    }
}

export {addToLikedVideo, removeFromLikedVideo};