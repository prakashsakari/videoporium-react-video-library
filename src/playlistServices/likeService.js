import axios from "axios";

const addToLikedVideo = async (video) => {
    try{
      const {data: {likes}} = await axios.post("/api/user/likes", {video}, 
      {
        headers: { authorization: localStorage.getItem("token") },
      });
      localStorage.setItem("likes", JSON.stringify(likes));
      return likes
    }catch(err){
      console.log(err)
    }
}

const removeFromLikedVideo = async (video) => {
    try{
        const {data: {likes}} = await axios.delete(`/api/user/likes/${video._id}`, 
        {
        headers: { authorization: localStorage.getItem("token") },
        })
        localStorage.setItem("likes", JSON.stringify(likes))
        return likes
    }catch(err){
        console.log(err)
    }
}

export {addToLikedVideo, removeFromLikedVideo};