import axios from "axios"

const createPlaylist = async (title) => {
    try{
        const {data:{playlists}} = await axios.post("/api/user/playlists", {playlist: {title: title}}, 
        {
            headers: { authorization: localStorage.getItem("token") },
        })
        localStorage.setItem("playlists", JSON.stringify(playlists));
        return playlists;
    }catch(error){
        console.log("Playlist creation error -", error);
    } 
}


const addToPlaylist = async (playlistId, video) => {
    try{
        const {data: {playlist}} = await axios.post(`/api/user/playlists/${playlistId}`, {video},
        {
            headers: { authorization: localStorage.getItem("token") },
        })
        const value = JSON.parse(localStorage.getItem("playlists"));
        const updatedPlaylist = value.map(pl => pl._id === playlist._id ? ({...pl, videos: playlist.videos}) : pl);
        localStorage.setItem("playlists", JSON.stringify(updatedPlaylist));
        return playlist
    }catch(error){
        console.log(error);
    }
}



const removeFromPlaylist = async (playlistId, video) => {
    try{
        const {data: {playlist}} = await axios.delete(`/api/user/playlists/${playlistId}/${video._id}`, 
        {
            headers: { authorization: localStorage.getItem("token") },
        });
        const value = JSON.parse(localStorage.getItem("playlists"));
        const updatedValue = value.map(pl => pl._id === playlist._id ? ({...pl, videos: pl.videos.filter(v => v._id !== video._id)}) : pl)
        localStorage.setItem("playlists", JSON.stringify(updatedValue));
        return playlist;
    }catch(error){
        console.log(error);
    }
}


const deletePlayList = async (playlistId) => {
    try {
        const {data: {playlists}} = await axios.delete(`/api/user/playlists/${playlistId}`,
        {
            headers: { authorization: localStorage.getItem("token") },
        })
        const value = JSON.parse(localStorage.getItem("playlists"));
        const updatedPlaylist = value.filter(({_id}) => _id !== playlistId);
        localStorage.setItem("playlists", JSON.stringify(updatedPlaylist));
        return playlists;
    }catch(error){
        console.log(error);
    }
}

export {createPlaylist, addToPlaylist, removeFromPlaylist, deletePlayList}