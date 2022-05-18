import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, SideBar, Alert} from "../../components";
import { usePlaylist, useAlert } from "../../context";
import "../Playlist.css";

export const Playlists = () => {
    const {playlists, watchLater}  = usePlaylist();
    const navigate = useNavigate();
    const {alert} = useAlert();

    return (
        <Fragment>
            {alert.open && <Alert />}
            <Navbar />
            <div class="d-flex gap mg">
                <SideBar />
                <main className="main-video-container scrollable-element">
                    <h2 className="heading-2 page-title title-width">All Playlist</h2>
                    <div className="playlist-container d-flex align-center">
                        <div className="d-flex align-center shadow playlist-box" onClick={() => navigate("/watchlater")}>
                            <h3 className="heading-3">Watch Later - {watchLater.length} videos</h3>
                        </div>
                    {
                        playlists && playlists.map(playlist => {
                            return (
                                <div className="d-flex align-center shadow playlist-box" onClick={() => navigate(`/playlist/${playlist._id}`)}>
                                    <h3 className="heading-3">{playlist.title} - {playlist.videos.length} videos</h3>
                                </div>
                            )
                        })
                    }
                    </div>
                
                </main>
            </div>
        </Fragment>
    )
}