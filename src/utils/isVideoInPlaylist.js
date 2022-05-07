export const isVideoInPlaylist = (playlists, playlistId, videoId) => 
    playlists.find(({_id}) => _id === playlistId)?.videos.some(({_id}) => _id === videoId);
