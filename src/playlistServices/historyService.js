import axios from "axios";

const addToHistory = async (video, setAlert) => {
    try{
        const {data: {history}} = await axios.post("/api/user/history", {video}, 
        {
        headers: { authorization: localStorage.getItem("token") },
        });
        localStorage.setItem("history", JSON.stringify(history))
        return history
    }catch(err){
        setAlert({
            open: true,
            message: "Something went wrong",
            type: "error"
        })
    }
}

const removeFromHistory = async (video, setAlert) => {
    try{
        const {data: {history}} = await axios.delete(`/api/user/history/${video._id}`, 
        {
        headers: { authorization: localStorage.getItem("token") },
        })
        localStorage.setItem("history", JSON.stringify(history))
        setAlert({
            open: true,
            message: "Video Removed Successfully",
            type: "success"
        })
        return history
    }catch(err){
        setAlert({
            open: true,
            message: "Something went wrong",
            type: "error"
        })
    }
}

const removeAllFromHistory = async (setAlert) => {
    try{
        const {data: {history}} = await axios.delete("/api/user/history/all", 
        {
        headers: { authorization: localStorage.getItem("token") },
        })
        localStorage.setItem("history", JSON.stringify(history));
        setAlert({
        open: true,
        message: "All Videos Removed Successfully",
        type: "success"
      })
        return history
    }catch(err){
        setAlert({
            open: true,
            message: "Something went wrong",
            type: "error"
        })
    }
}

export { addToHistory, removeFromHistory, removeAllFromHistory };