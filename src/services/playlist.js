import axios from "axios";

export const createPlaylist = async (title) => {
    try {
        console.log("creating playlist........")
        console.log("Playlist Name-", title);
        const { data: { playlists } } = await axios.post("/api/user/playlists", { playlist: { title: title } });
        console.log(playlists);
        return playlists;
      } catch (error) {
        console.log("Server Error -", error);
      }
}