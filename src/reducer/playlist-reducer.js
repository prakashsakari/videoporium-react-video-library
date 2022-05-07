export const playlistReducer = (liked, { type, payload }) => {
    switch (type) {
        case "LIKED":
            return {
            ...liked,
            likedVideos: !liked.likedVideos.some(
                (video) => video._id === payload._id
            )
                ? [...liked.likedVideos, payload]
                : liked.likedVideos
            };
        
        case "REMOVE_FROM_LIKE":
            return {
                ...liked,
                likedVideos: liked.likedVideos.filter((video) => video._id !== payload._id)
            };
        
        case "WATCH_LATER":
            return {
                ...liked,
                watchLater: !liked.watchLater.some((video) => video._id === payload._id)
                ? [...liked.watchLater, payload]
                : liked.watchLater
            };
        
        case "REMOVE_FROM_WL":
            return {
                ...liked,
                watchLater: liked.watchLater.filter((video) => video._id !== payload._id)
            };

        case "HISTORY":
            return {
                ...liked,
                history: !liked.history.some((video) => video._id === payload._id)
                ? [...liked.history, payload]
                : liked.history
            };
        
        case "REMOVE_FROM_HISTORY":
            return {
                ...liked,
                history: liked.history.filter((video) => video._id !== payload._id)
            }
        
        case "CLEAR_HISTORY":
            return {
                ...liked,
                history: []
            };

        case "SET_OPTION":
            return {
                ...liked,
                option: payload
            };
        
        case "DELETE":
            return {
                ...liked,
                likedVideos:
                liked.option === "liked-video"
                    ? liked.likedVideos.filter((video) => video._id !== payload._id)
                    : liked.likedVideos,
                history:
                liked.option === "history"
                    ? liked.history.filter((video) => video._id !== payload._id)
                    : liked.history,
                watchLater:
                liked.option === "watch-later"
                    ? liked.watchLater.filter((video) => video._id !== payload._id)
                    : liked.watchLater,
            };
        
        case "CLEAR_ALL":
            return {
                ...liked,
                likedVideos: [],
                watchLater: [],
                history: [],
            }
    
        default:
            return liked;
    }
};
  