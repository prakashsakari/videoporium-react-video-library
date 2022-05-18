import { Fragment } from "react";
import "./Modal.css";
import { useModal, usePlaylist, useAlert } from "../../context";
import { createPlaylist, addToPlaylist, removeFromPlaylist, addToWatchLater, removeFromWatchLater } from "../../playlistServices";
import { isInWatchlater, isVideoInPlaylist} from "../../utils";
import { Alert } from "../Alert/Alert";


export const Modal = ({singleVideo}) => {
  const { isModalOpen, isFormOpen, playlistName, modalDispatch } = useModal();
  const {watchLater, playlists, playlistDispatch} = usePlaylist();
  const {alert, setAlert} = useAlert();

  const watchlater = isInWatchlater(watchLater, singleVideo._id);

  const handleShowModal = () => {
    modalDispatch({
      type: "SHOW_MODAL"
    })
  }

  const handlePlaylistNameInput = (event) => {
    modalDispatch({
      type: "PLAYLIST_NAME",
      payload: event.target.value,
    })
  }

  const handleShowForm = () => {
    modalDispatch({
      type: "SHOW_FORM"
    })
  }

  const handleFormSubmit = async (event) => {
      event.preventDefault();
      const playlists =  await createPlaylist(playlistName, setAlert);
      playlistDispatch({
          type: "SET_PLAYLIST",
          payload: playlists
      })
      modalDispatch({
        type: "SHOW_FORM"
      })

      modalDispatch({
        type: "CLEAR_PLAYLIST_NAME"
      })
   } 

  const handleWatchLaterChange = async (event) => {
    if (event.target.checked){
      const watchlaterVideo = await addToWatchLater(singleVideo, setAlert);
        playlistDispatch({
          type: "WATCH_LATER",
          payload: singleVideo
        });
    }else{
      const removedwatchlaterVideo = await removeFromWatchLater(singleVideo, setAlert);
        playlistDispatch({
          type: "REMOVE_FROM_WL",
          payload: singleVideo
        });
    }
  }

  const handlePlaylistChange = async (event, playlistId) => {
    if (event.target.checked){
      const videoAddedToPlaylist = await addToPlaylist(playlistId, singleVideo, setAlert);
      playlistDispatch({
        type: "ADD_TO_PLAYLIST",
        payload:{
          playlistId, singleVideo
        }
      })
    }else{
      const videoRemovedFromPlaylist = await removeFromPlaylist(playlistId, singleVideo, setAlert);
      playlistDispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload:{
          playlistId, singleVideo
        }
      })
    }
  }

  return (
    <Fragment>
      {alert.open && <Alert />}
    <div
      class={
        !isModalOpen
          ? "d-none"
          : "modal-container d-flex direction-column align-center justify-center"
      }
    >
      <div class="m-box">
        <div class="modal-nav d-flex align-center">
          <h3 class="heading-4">Save to</h3>
          <span
            class="material-icons-outlined cursor close-modal"
            onClick={handleShowModal}
          >
            close
          </span>
        </div>
        <div class="playlist-title col-flex-util gap-8px">
          <label class="d-flex align-center gap-12px">
            <input class="check-input" type="checkbox" checked={watchlater} 
                  onChange={handleWatchLaterChange}/>
                  Watch Later
          </label>
          {
              playlists && playlists.length > 0 && playlists.map(({_id, title}) => {
                
                  return (
                    <label class="d-flex align-center gap-12px">
                    <input class="check-input" type="checkbox" checked={isVideoInPlaylist(playlists, _id, singleVideo._id)}
                    onChange={(event) => handlePlaylistChange(event, _id)}
                    />
                    {title}
                  </label>
                  )    
              })
          }
          {isFormOpen ? (
            <form className="col-flex-util gap-8px" onSubmit={handleFormSubmit}>
              <input 
                value={playlistName}
                onChange={handlePlaylistNameInput}
                className="title-input" 
                placeholder="my playlist"
                required
              />
              <button className="button cursor create-btn">
                Create
              </button>
            </form>
          ) : (
            <button
              class="button cursor d-flex align-center gap-8px playlist-btn"
              onClick={handleShowForm}
            >
              <span class="material-icons-outlined">add</span>
              Create New Playlist
            </button>
          )}
        </div>
      </div>
    </div>
    </Fragment>
  );
};
