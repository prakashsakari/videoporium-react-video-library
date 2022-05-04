export const isLiked = (video, videoId) =>
  video.some(({ _id }) => _id === videoId);
