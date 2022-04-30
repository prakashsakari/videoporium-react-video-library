import {useNavigate} from "react-router-dom";
import { usePlaylist } from "../../context";
import "./VideoCard.css";

export const VideoCard = ({ video }) => {
  const { _id, image, length, icon, title, channelName, views } = video;
  const navigate = useNavigate();
  const { playlistDispatch } = usePlaylist();
  
  return (
    <div class="video-card col-flex-util gap-12px" 
          onClick={() => {
            navigate(`/video/${_id}`)
            playlistDispatch({
              type: "HISTORY",
              payload: video
            });

            }}>
        <div class="thumbnail-container">
          <img class="thumbnail" src={image} alt="thumbnail" />
          <span class="video-length absolute right-0">{length}</span>
        </div>
        <div class="about-video d-flex gap-12px">
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
          <div class="options cursor">
            <span class="material-icons-outlined">more_vert</span>
          </div>
        </div>
    </div>
  );
};
