import { usePlaylist } from "../../context/";
import "./VideoDetails.css"

export const VideoDetails = ({_id, title, channelName, views, description, singleVideo}) => {
    const { likedVideos, watchLater , playlistDispatch } = usePlaylist();

    return (
        <div class="single-video-container">
            <div class="about-creator col-flex-util gap-12px">
                <h3 class="heading-3">{title}</h3>
                <h4 class="heading-4">{channelName}</h4>
            </div>
            <div class="video-frame-container">
                <iframe
                    title="video"
                    class="video-frame"
                    allowFullScreen
                    src={`https://www.youtube.com/embed/${_id}`}
                ></iframe>
            </div>
            <div class="featured-options d-flex align-center gap">
                <button class="button d-flex align-center gap-8px feature-btn" onClick={() =>
                        playlistDispatch({
                        type: "LIKED",
                        payload: singleVideo
                        })}>
                        <span className={ likedVideos.some((video) => video._id === singleVideo._id)
                            ? "material-icons"
                            : "material-icons-outlined"
                        }>
                        thumb_up_alt
                        </span>
                        <span class="item-title">Like</span>
                </button>
                <button class="button d-flex align-center gap-8px feature-btn" onClick={() =>
                        playlistDispatch({
                        type: "WATCH_LATER",
                        payload: singleVideo
                        })}>
                        <span class={
                        watchLater.some((video) => video._id === singleVideo._id)
                            ? "material-icons"
                            : "material-icons-outlined"
                        }>browse_gallery
                        </span>
                        <span class="item-title">Save to Watch Later</span>
                </button>
                <button class="button d-flex align-center gap-8px feature-btn">
                        <span class="material-icons-outlined">playlist_add_circle</span>
                        <span class="item-title">Add to Playlist</span>
                </button>
                <span class="views-count d-flex align-center gap-8px">
                    <span class="material-icons-outlined">live_tv</span>
                    {views} Views
                </span>
            </div>
            <div class="description">
                <h3 class="heading-3">Description</h3>
                <small>{description}</small>
            </div>
        </div>
    );
};
