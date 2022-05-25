const getVideoBySearch = (video, tag) =>
  video && video.length > 0 && video.filter(
    ({ title, channelName }) =>
      title.toLowerCase().includes(tag.toLowerCase()) ||
      channelName.toLowerCase().includes(tag.toLowerCase())
);

const getPlaylistBySearch = (playlist, tag) => playlist.filter(({title}) => title.toLowerCase().includes(tag.toLowerCase()))

export {getVideoBySearch, getPlaylistBySearch}
