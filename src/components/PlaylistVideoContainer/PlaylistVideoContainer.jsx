import { Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePlaylist, useAlert } from "../../context"
import { Navbar, SideBar, HorizontalVideoCard, Alert } from "../../components";
import { getPlaylist } from "../../utils";
import { deletePlayList } from "../../playlistServices";

export const PlaylistVideoContainer = () => {

    const { playlists, playlistDispatch } = usePlaylist();
    const {id: playlistId} = useParams();
    const playlist = getPlaylist(playlistId, playlists);
    const navigate = useNavigate();
    const {alert, setAlert} = useAlert()

    const handleClearPlayList = async () => {
        const deletedPlaylist = await deletePlayList(playlist._id, setAlert);
        playlistDispatch({
            type: "DELETE_PLAYLIST",
            payload: playlist._id
        })
        navigate("/playlist");
    }

    return (
        <Fragment>
            {alert.open && <Alert />}
            <Navbar />
            <div class="d-flex gap mg">
                <SideBar />
                <main className="main-video-container scrollable-element">
                <div className="d-flex align-center page-title title-width">
                <h2 className="heading-2">{playlist?.title} - {playlist?.videos?.length} videos</h2>
                <button className="button gap-12px cursor d-flex align-center clear-all"
                        onClick={handleClearPlayList}
                >
                    Delete Playlist <span class="material-icons-outlined">clear_all</span>{" "}
                </button>
                </div>
                
                {
                    playlist && playlist.videos.length > 0 ? (playlist.videos.map((video) => <HorizontalVideoCard video={video} playlistId={playlist._id} key={video._id} />)) : (
                        <div className="notify-message">
                            <h3 className="heading-3">
                                You have not added any video yet.{" "}
                                <span
                                className="back-home cursor"
                                onClick={() => navigate("/")}
                                >
                                Explore all videos
                                </span>
                            </h3>
                        </div>
                    )
                }
                </main>
            </div>
        </Fragment>
    )
}