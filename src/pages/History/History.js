import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Navbar, SideBar, HorizontalVideoCard, Alert } from "../../components";
import { usePlaylist, useAlert, useCategory } from "../../context";
import { removeAllFromHistory } from "../../playlistServices";
import { getVideoBySearch } from "../../utils";
import "../Playlist.css"

export const History = () => {
  const { history, playlistDispatch } = usePlaylist();
  const navigate = useNavigate();
  const { alert, setAlert } = useAlert();
  const { tag } = useCategory();

  const filteredVideos = getVideoBySearch(history, tag);

  const handleClearAllClick = async () => {
    const clearedVideo = await removeAllFromHistory(setAlert);
    playlistDispatch({
      type: "CLEAR_HISTORY"
  });
  }
  
  return (
    <Fragment>
      {alert.open && <Alert />}
      <Navbar />
      <div class="d-flex gap mg">
        <SideBar />
        <main class="main-video-container scrollable-element">
        <div className="d-flex align-center page-title title-width">
            <h2 className="heading-2">History</h2>
            <button
              className="button gap-12px cursor d-flex align-center clear-all"
              onClick={handleClearAllClick}
            >
              Clear All <span class="material-icons-outlined">clear_all</span>{" "}
            </button>
          </div>
          {filteredVideos.length > 0 ? (
            filteredVideos?.map((video) => <HorizontalVideoCard video={video} />)
          ) : history.length < 1 ? (
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
          ) : (<div className="notify-message">
          <h3 className="heading-3">
              No videos found. Try something else....{" "}
              
          </h3>
          </div>)
        }
        </main>
      </div>
    </Fragment>
  );
};
