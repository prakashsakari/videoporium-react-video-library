export const playlistReducer = (playlistState, { type, payload }) => {
    switch (type) {
        case "LIKED":
            return {
            ...playlistState,
            likedVideos: !playlistState.likedVideos.some(
                (video) => video._id === payload._id
            )
                ? [...playlistState.likedVideos, payload]
                : playlistState.likedVideos
            };
        
        case "REMOVE_FROM_LIKE":
            return {
                ...playlistState,
                likedVideos: playlistState.likedVideos.filter((video) => video._id !== payload)
            };
        
        case "WATCH_LATER":
            return {
                ...playlistState,
                watchLater: !playlistState.watchLater.some((video) => video._id === payload._id)
                ? [...playlistState.watchLater, payload]
                : playlistState.watchLater
            };
        
        case "REMOVE_FROM_WL":
            return {
                ...playlistState,
                watchLater: playlistState.watchLater.filter((video) => video._id !== payload)
            };

        case "HISTORY":
            return {
                ...playlistState,
                history: !playlistState.history.some((video) => video._id === payload._id)
                ? [...playlistState.history, payload]
                : playlistState.history
            };
        
        case "CLEAR_HISTORY":
            return {
                ...playlistState,
                history: []
            };

        case "SET_OPTION":
            return {
                ...playlistState,
                option: payload
            };
        
        case "DELETE":
            return {
                ...playlistState,
                likedVideos:
                playlistState.option === "liked-video"
                    ? playlistState.likedVideos.filter((video) => video._id !== payload._id)
                    : playlistState.likedVideos,
                history:
                playlistState.option === "history"
                    ? playlistState.history.filter((video) => video._id !== payload._id)
                    : playlistState.history,
                watchLater:
                playlistState.option === "watch-later"
                    ? playlistState.watchLater.filter((video) => video._id !== payload._id)
                    : playlistState.watchLater,
            };
        
        case "SET_PLAYLIST":
            return{
                ...playlistState,
                playlists: payload
            }
    
        default:
            return liked;
    }
};
  