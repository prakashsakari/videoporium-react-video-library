export const getVideoBySearch = (video, tag) =>
  video.filter(
    ({ title, channelName }) =>
      title.toLowerCase().includes(tag.toLowerCase()) ||
      channelName.toLowerCase().includes(tag.toLowerCase())
  );
