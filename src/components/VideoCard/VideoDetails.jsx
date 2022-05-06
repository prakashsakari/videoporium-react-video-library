import { useNavigate } from "react-router-dom";

import { usePlaylist, useAuth } from "../../context/";
import { isLiked, isInWatchlater } from "../../utils";
import { addToLikedVideo, removeFromLikedVideo, addToWatchLater, removeFromWatchLater } from "../../playlistServices";
import "./VideoDetails.css"

export const VideoDetails = ({_id, title, channelName, views, description, singleVideo}) => {
    const { likedVideos, watchLater , playlistDispatch } = usePlaylist();
    const liked = isLiked(likedVideos, _id);
    const watchlater = isInWatchlater(watchLater, _id);

    const {eToken} = useAuth();

    const navigate = useNavigate();

    const handleLikeClick = async () => {
      if (eToken){
        if (!liked){
          const likes = await addToLikedVideo(singleVideo);
          likes.map(video => playlistDispatch({
            type: "LIKED",
            payload: video
          }))
          
        }else{
          const removedLikes = await removeFromLikedVideo(singleVideo);
          playlistDispatch({
            type: "REMOVE_FROM_LIKE",
            payload: singleVideo
          })
          
        }
      }else{
        navigate("/login")
      }
        
      };
    
      const handleWatchLaterClick = async () => {
        if (eToken){
          if (!watchlater){
            const watchlaterVideo = await addToWatchLater(singleVideo);
            playlistDispatch({
              type: "WATCH_LATER",
              payload: singleVideo
            });
          }else{
            const removedwatchlaterVideo = await removeFromWatchLater(singleVideo);
            playlistDispatch({
              type: "REMOVE_FROM_WL",
              payload: singleVideo
            });
          }
        }else{
          navigate("/login")
        }
      };

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
                <button
                    class="button d-flex align-center gap-8px feature-btn"
                    onClick={handleLikeClick}>
                    <span class={liked ? "material-icons" : "material-icons-outlined"}>
                    thumb_up_alt
                    </span>
                    <span class="item-title">{liked ? "Liked" : "Like"}</span>
                </button>
                <button
                    class="button d-flex align-center gap-8px feature-btn"
                    onClick={handleWatchLaterClick}>
                    <span
                    class={watchlater ? "material-icons" : "material-icons-outlined"}>
                    browse_gallery
                    </span>
                    <span class="item-title">
                    {watchlater ? "Added to Watch Later" : "Save to Watch Later"}
                    </span>
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
