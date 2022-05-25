const getVideoBySearch = (video, tag) =>
  video.filter(
    ({ title, channelName }) =>
      title.toLowerCase().includes(tag.toLowerCase()) ||
      channelName.toLowerCase().includes(tag.toLowerCase())
);

const getPlaylistBySearch = (playlist, tag) => playlist.filter(({title}) => title.toLowerCase().includes(tag.toLowerCase()))

export {getVideoBySearch, getPlaylistBySearch}
