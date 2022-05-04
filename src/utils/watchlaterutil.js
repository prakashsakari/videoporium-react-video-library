export const isInWatchlater = (video, videoId) =>
  video.some(({ _id }) => _id === videoId);
