import "./Modal.css";
import { useModal } from "../../context";
import { usePlaylist } from "../../context";
import {createPlaylist} from "../../services";

export const Modal = () => {
  const { isModalOpen, isFormOpen, playlistName, modalDispatch } = useModal();
  const {playlists, playlistDispatch} = usePlaylist();

  const handleFormSubmit = (e) => {
      e.preventDefault();
      const playlists = createPlaylist(playlistName);
      playlistDispatch({
          type: "SET_PLAYLIST",
          payload: playlists
      })
      modalDispatch({
        type: "SHOW_FORM"
      })
   } 

  return (
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
            onClick={() =>
              modalDispatch({
                type: "SHOW_MODAL"
              })
            }
          >
            close
          </span>
        </div>
        <div class="playlist-title col-flex-util gap-8px">
          <label class="d-flex align-center gap-12px">
            <input class="check-input" type="checkbox" />
            Watch Later
          </label>
          {
              playlists && playlists.length > 0 && playlists.map(playlist => {
                  return (
                    <label class="d-flex align-center gap-12px">
                    <input class="check-input" type="checkbox" />
                    {playlist.title}
                  </label>
                  )
              })
          }
          {isFormOpen ? (
            <form className="col-flex-util gap-8px" onSubmit={handleFormSubmit}>
              <input 
                value={playlistName}
                onChange={(e) => modalDispatch({
                    type: "PLAYLIST_NAME",
                    payload: e.target.value,
                })}
                required
                className="title-input" placeholder="my playlist" />
              <button className="button cursor create-btn">
                Create
              </button>
            </form>
          ) : (
            <button
              class="button cursor d-flex align-center gap-8px playlist-btn"
              onClick={() =>
                modalDispatch({
                  type: "SHOW_FORM"
                })
              }
            >
              <span class="material-icons-outlined">add</span>
              Create Playlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
