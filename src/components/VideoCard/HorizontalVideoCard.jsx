import {useNavigate} from "react-router-dom";
import { usePlaylist } from "../../context";

export const HorizontalVideoCard = ({ video }) => {
    const { image, length, icon, title, channelName, views, _id } = video;
    const { playlistDispatch, removeFromLikedVideo } = usePlaylist();
    const navigate = useNavigate();
  
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
                // onClick={() =>
                //   playlistDispatch({
                //     type: "DELETE",
                //     payload: video
                //   })
                // }
                onClick={() => removeFromLikedVideo(video)}
          >delete_outline</span>
        </button>
      </div>
    );
  };
  