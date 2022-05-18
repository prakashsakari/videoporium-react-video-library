import {useNavigate} from "react-router-dom";
import { usePlaylist, useAuth, useAlert } from "../../context";
import {isInWatchlater} from "../../utils";
import {addToWatchLater, removeFromWatchLater, addToHistory} from "../../playlistServices";
import "./VideoCard.css";

export const VideoCard = ({ video }) => {
  const { _id, image, length, icon, title, channelName, views } = video;
  const { playlistDispatch, watchLater} = usePlaylist();
  const watchlater = isInWatchlater(watchLater, video._id);
  const navigate = useNavigate();
  const {eToken} = useAuth();
  const {alert, setAlert} = useAlert();

  const handleWatchLaterClick = async () => {
    if (eToken){
      if (!watchlater){
        const watchlaterVideo = await addToWatchLater(video, setAlert);
        playlistDispatch({
          type: "WATCH_LATER",
          payload: video
        });
      }else{
        const removedwatchlaterVideo = await removeFromWatchLater(video, setAlert);
        playlistDispatch({
          type: "REMOVE_FROM_WL",
          payload: video
        });
      }
    }else{
      navigate("/login")
    }
  };

  const handleHistoryClick = async () => {
      navigate(`/video/${_id}`);
      const historyVideos = await addToHistory(video);
      playlistDispatch({
        type: "HISTORY",
        payload: video
      });
    }
  
  return (
    <div class="video-card relative">
        <div className="link col-flex-util gap-12px" onClick={handleHistoryClick}>
          <div class="thumbnail-container">
            <img class="thumbnail" src={image} alt="thumbnail" />
            <span class="video-length absolute right-0">{length}</span>
          </div>
        </div>
          <div class="about-video d-flex gap-12px relative">
              <div class="channel-icon-container">
                <img class="channel-icon" src={icon} alt="icon" />
              </div>
              <div class="video-details col-flex-util gap-12px">
                <h4 class="heading-4">{title}</h4>
                <h4 class="heading-4 line-height">{channelName}</h4>
                <h4 class="heading-4 line-height d-flex align-center gap-8px">
                  <span class="material-icons-outlined">live_tv</span> {views} views
                </h4>
              </div>
              <button
            class="button d-flex align-center gap-8px feature-btn option absolute"
            onClick={handleWatchLaterClick}>
            <span class="material-icons-outlined">
              {watchlater ? "task_alt" : "watch_later"}
            </span>
        </button>
          </div>
    </div>
  );
};
