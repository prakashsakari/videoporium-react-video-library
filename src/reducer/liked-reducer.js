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
      default:
        return liked;
    }
};
  