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
                likedVideos: playlistState.likedVideos.filter((video) => video._id !== payload._id)
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
                watchLater: playlistState.watchLater.filter((video) => video._id !== payload._id)
            };

        case "HISTORY":
            return {
                ...playlistState,
                history: !playlistState.history.some((video) => video._id === payload._id)
                ? [...playlistState.history, payload]
                : playlistState.history
            };
        
        case "REMOVE_FROM_HISTORY":
            return {
                ...playlistState,
                history: playlistState.history.filter((video) => video._id !== payload._id)
            }
        
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
            return {
                ...playlistState,
                playlists: payload
            }
        
        case "ADD_TO_PLAYLIST":
            return {
                ...playlistState,
                playlists: playlistState.playlists.map(playlist => playlist._id === payload.playlistId ? {...playlist, videos: [...playlist.videos, payload.singleVideo]}: playlist)
            }
        

        case "REMOVE_FROM_PLAYLIST":
            return {
                ...playlistState,
                playlists: playlistState.playlists.map(playlist => playlist._id === payload.playlistId ? {...playlist, videos: playlist.videos.filter(video => video._id !== payload.singleVideo._id)} : playlist)
            }
        
        case "DELETE_PLAYLIST":
            return {
                ...playlistState,
                playlists: playlistState.playlists.filter(({_id}) => _id !== payload)
            }

        case "CLEAR_ALL":
            return {
                ...playlistState,
                likedVideos: [],
                watchLater: [],
                history: [],
                playlists: []
            }
    
        default:
            return playlistState;
    }
};
  