import axios from "axios";

const addToHistory = async (video) => {
    try{
        const {data: {history}} = await axios.post("/api/user/history", {video}, 
        {
        headers: { authorization: localStorage.getItem("token") },
        });
        localStorage.setItem("history", JSON.stringify(history))
        return history
    }catch(err){
        console.log(err)
    }
}

const removeFromHistory = async (video) => {
    try{
        const {data: {history}} = await axios.delete(`/api/user/history/${video._id}`, 
        {
        headers: { authorization: localStorage.getItem("token") },
        })
        localStorage.setItem("history", JSON.stringify(history))
        return history
    }catch(err){
        console.log(err)
    }
}

const removeAllFromHistory = async () => {
    try{
        const {data: {history}} = await axios.delete("/api/user/history/all", 
        {
        headers: { authorization: localStorage.getItem("token") },
        })
        localStorage.setItem("history", JSON.stringify(history));
        return history
    }catch(err){
        console.log(err)
    }
}

export { addToHistory, removeFromHistory, removeAllFromHistory };