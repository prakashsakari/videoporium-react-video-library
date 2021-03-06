import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Navbar, SideBar, HorizontalVideoCard, Alert } from "../../components";
import { usePlaylist, useAlert } from "../../context";
import "../Playlist.css";

export const WatchLater = () => {
  const { watchLater } = usePlaylist();
  const navigate = useNavigate();
  const { alert } = useAlert();

  return (
        <Fragment>
        {alert.open && <Alert />}
        <Navbar />
        <div class="d-flex gap mg">
            <SideBar />
            <main class="main-video-container scrollable-element">
                <h2 className="heading-2 page-title title-width">Watch Later</h2>
                {watchLater && watchLater.length > 0 ? (
                    watchLater.map((video) => <HorizontalVideoCard video={video} />)
                ) : (
                    <div className="notify-message">
                <h3 className="heading-3">
                    You have not saved any video to watch later yet.{" "}
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
        </Fragment>
    );
};
