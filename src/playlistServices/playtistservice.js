import axios from "axios"

const createPlaylist = async (title, setAlert) => {
    try{
        const {data:{playlists}} = await axios.post("/api/user/playlists", {playlist: {title: title}}, 
        {
            headers: { authorization: localStorage.getItem("token") },
        })
        localStorage.setItem("playlists", JSON.stringify(playlists));
        setAlert({
        open: true,
        message: "Playlist Created Successfully",
        type: "success"
      })
        return playlists;
    }catch(error){
        setAlert({
            open: true,
            message: "Something went wrong",
            type: "error"
        })
    } 
}


const addToPlaylist = async (playlistId, video, setAlert) => {
    try{
        const {data: {playlist}} = await axios.post(`/api/user/playlists/${playlistId}`, {video},
        {
            headers: { authorization: localStorage.getItem("token") },
        })
        const value = JSON.parse(localStorage.getItem("playlists"));
        const updatedPlaylist = value.map(pl => pl._id === playlist._id ? ({...pl, videos: playlist.videos}) : pl);
        localStorage.setItem("playlists", JSON.stringify(updatedPlaylist));
        setAlert({
        open: true,
        message: "Video Added To Playlist",
        type: "success"
      })
        return playlist
    }catch(error){
        setAlert({
            open: true,
            message: "Something went wrong",
            type: "error"
        })
    }
}



const removeFromPlaylist = async (playlistId, video, setAlert) => {
    try{
        const {data: {playlist}} = await axios.delete(`/api/user/playlists/${playlistId}/${video._id}`, 
        {
            headers: { authorization: localStorage.getItem("token") },
        });
        const value = JSON.parse(localStorage.getItem("playlists"));
        const updatedValue = value.map(pl => pl._id === playlist._id ? ({...pl, videos: pl.videos.filter(v => v._id !== video._id)}) : pl)
        localStorage.setItem("playlists", JSON.stringify(updatedValue));
        setAlert({
        open: true,
        message: "Video Removed From Playlist",
        type: "success"
      })
        return playlist;
    }catch(error){
        setAlert({
            open: true,
            message: "Something went wrong",
            type: "error"
        })
    }
}


const deletePlayList = async (playlistId, setAlert) => {
    try {
        const {data: {playlists}} = await axios.delete(`/api/user/playlists/${playlistId}`,
        {
            headers: { authorization: localStorage.getItem("token") },
        })
        const value = JSON.parse(localStorage.getItem("playlists"));
        const updatedPlaylist = value.filter(({_id}) => _id !== playlistId);
        localStorage.setItem("playlists", JSON.stringify(updatedPlaylist));
        setAlert({
        open: true,
        message: "Playlist Deleted",
        type: "success"
      })
        return playlists;
    }catch(error){
        setAlert({
            open: true,
            message: "Something went wrong",
            type: "error"
        })
    }
}

export {createPlaylist, addToPlaylist, removeFromPlaylist, deletePlayList}