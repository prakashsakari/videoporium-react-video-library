import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Navbar, HorizontalVideoCard, SideBar, Alert } from "../../components";
import { usePlaylist, useAlert, useCategory } from "../../context";
import { getVideoBySearch } from "../../utils";
import "../Playlist.css"

export const Liked = () => {
  const { likedVideos } = usePlaylist();
  const { alert } = useAlert();
  const { tag } = useCategory();
  const navigate = useNavigate();

  const filteredVideos = getVideoBySearch(likedVideos, tag);

  return (
    <Fragment>
      {alert.open && <Alert />}
      <Navbar />
      <div class="d-flex gap mg">
        <SideBar />
        <main className="main-video-container scrollable-element">
          <h2 className="heading-2 page-title title-width">Liked Videos</h2>
          {filteredVideos && filteredVideos.length > 0 ? (
            filteredVideos.map((video) => <HorizontalVideoCard video={video} key={video._id}/>)
          ) : likedVideos.length < 1 ?  (
            <div className="notify-message">
              <h3 className="heading-3">
                You have not liked any video yet.{" "}
                <span
                  className="back-home cursor"
                  onClick={() => navigate("/")}
                >
                  Explore all videos
                </span>
              </h3>
            </div>
          ) : (<div className="notify-message">
          <h3 className="heading-3">
              No videos found. Try something else....{" "}
              
          </h3>
          </div>)}
        </main>
      </div>
    </Fragment>
  );
};
