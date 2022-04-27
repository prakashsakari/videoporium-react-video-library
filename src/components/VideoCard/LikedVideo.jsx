export const LikedVideo = ({ video }) => {
    const { image, length, icon, title, channelName, views } = video;
  
    return (
      <div className="single-video-container d-flex gap-12px relative">
        <div class="thumbnail-container liked">
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
        <button className="button absolute top-0 right-0 del-btn">
          <span class="material-icons">delete_outline</span>
        </button>
      </div>
    );
  };
  