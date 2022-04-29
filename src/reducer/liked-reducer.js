export const likedReducer = (liked, { type, payload }) => {
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
        
        case "WATCH_LATER":
            return {
                ...liked,
                watchLater: !liked.watchLater.some((video) => video._id === payload._id)
                ? [...liked.watchLater, payload]
                : liked.watchLater
            };

        case "HISTORY":
            return {
                ...liked,
                history: !liked.history.some((video) => video._id === payload._id)
                ? [...liked.history, payload]
                : liked.history
            };
    
        default:
            return liked;
    }
};
  