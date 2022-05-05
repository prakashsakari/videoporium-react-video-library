import { useNavigate } from "react-router-dom";
import { Navbar, SideBar, HorizontalVideoCard } from "../../components";
import { usePlaylist } from "../../context";
import "../Playlist.css"

export const History = () => {
  const { history, playlistDispatch } = usePlaylist();
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar />
      <div class="d-flex gap mg">
        <SideBar />
        <main class="main-video-container scrollable-element">
        <div className="d-flex align-center page-title title-width">
            <h2 className="heading-2">History</h2>
            <button
              className="button gap-12px cursor d-flex align-center clear-all"
              onClick={() =>
                playlistDispatch({
                  type: "CLEAR_HISTORY"
                })
              }
            >
              Clear All <span class="material-icons-outlined">clear_all</span>{" "}
            </button>
          </div>
          {history.length > 0 ? (
            history?.map((video) => <HorizontalVideoCard video={video} />)
          ) : (
            <div className="notify-message">
              <h3 className="heading-3">
                You have not viewed any video yet.{" "}
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
