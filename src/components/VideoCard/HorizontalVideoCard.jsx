import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

import { usePlaylist } from "../../context";
import { removeFromLikedVideo, removeFromWatchLater, removeFromHistory } from "../../playlistServices";

export const HorizontalVideoCard = ({ video }) => {
    const { image, length, icon, title, channelName, views, _id } = video;
    const navigate = useNavigate();
    const { option, playlistDispatch} = usePlaylist();

    const handleDeleteClick = async () => {
      if  (option === "liked-video"){
        const removedLikes = await removeFromLikedVideo(video);
        playlistDispatch({
          type: "REMOVE_FROM_LIKE",
          payload: video
        }) 
      }else if (option === "watch-later"){
        const removedwatchlaterVideo = await removeFromWatchLater(video);
        playlistDispatch({
          type: "REMOVE_FROM_WL",
          payload: video
        });
      }else if (option === "history"){
        const removedFromHistory = await removeFromHistory(video);
        playlistDispatch({
          type: "REMOVE_FROM_HISTORY",
          payload: video
      });
      }
    }
  
    return (
      <div className="single-video-container relative">
        <div className="d-flex gap-12px" onClick={() => navigate(`/video/${_id}`)}>
        <div class="thumbnail-container liked" >
          <img class="thumbnail" src={image} alt="thumbnail" />
          <span class="video-length absolute right-0">{length}</span>
        </div>
        <div className="about-video d-flex gap-12px">
          <div class="channel-icon-container">
            <img class="channel-icon" src={icon} alt="icon" />
          </div>
          <div class="video-details col-flex-util gap-12px">
            <h4 class="heading-4">{title}</h4>
            <h4 class="heading-4 line-height">{channelName}</h4>
            <h4 class="heading-4 line-height d-flex align-center gap-8px">
              <span class="material-icons-outlined">live_tv</span>
              {views} views
            </h4>
          </div>
        </div>
        </div>
        <button className="button absolute top-0 right-0 del-btn" >
          <span class="material-icons cursor" 
                onClick={handleDeleteClick}
          >delete_outline</span>
        </button>
      </div>
    );
  };
  