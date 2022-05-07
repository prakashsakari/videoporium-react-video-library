import { useNavigate } from "react-router-dom";
import { Navbar, HorizontalVideoCard, SideBar } from "../../components";
import { usePlaylist } from "../../context";
import "../Playlist.css"

export const Liked = () => {
  const { likedVideos } = usePlaylist();

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div class="d-flex gap mg">
        <SideBar />
        <main className="main-video-container scrollable-element">
          <h2 className="heading-2 page-title title-width">Liked Videos</h2>
          {likedVideos && likedVideos.length > 0 ? (
            likedVideos.map((video) => <HorizontalVideoCard video={video} key={video._id}/>)
          ) : (
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
          )}
        </main>
      </div>
    </>
  );
};
