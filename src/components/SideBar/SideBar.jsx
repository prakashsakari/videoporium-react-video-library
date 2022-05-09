import { NavLink } from "react-router-dom";
import { usePlaylist } from "../../context";
import "./SideBar.css";

export const SideBar = () => {
  const { playlistDispatch } = usePlaylist();

  return (
    <aside className="hero-drawer" id="Drawer">
      <div className="drawer-content">
        <nav className="drawer-content-list">
          <NavLink to="/" className={({ isActive }) =>
              `${isActive ? "selected br" : ""} list-item-drawer pointer`
            }>
            <span className="material-icons-outlined">explore</span>
            <span className="item-title">Home</span>
          </NavLink>
          <NavLink to="/liked"
            onClick={() => 
              playlistDispatch({
                type: "SET_OPTION",
                payload: "liked-video"
              })
            }
            className={({ isActive }) =>
              `${isActive ? "selected br" : ""} list-item-drawer pointer`
            }
          >
            <span className="material-icons-outlined">thumb_up_off_alt</span>
            <span className="item-title">Liked</span>
          </NavLink>
          <NavLink to="/playlist"
            onClick={() => 
              playlistDispatch({
                type: "SET_OPTION",
                payload: "playlist"
              })
            }
            className={({ isActive }) =>
              `${isActive ? "selected br" : ""} list-item-drawer pointer`
            }>
            <span className="material-icons-outlined">playlist_add_circle</span>
            <span className="item-title">Playlist</span>
          </NavLink>
          <NavLink to="/watchlater" onClick={() => 
              playlistDispatch({
                type: "SET_OPTION",
                payload: "watch-later"
              })
            } className={({ isActive }) =>
            `${isActive ? "selected br" : ""} list-item-drawer pointer`
          }>
            <span className="material-icons-outlined">browse_gallery</span>
            <span className="item-title">Watch Later</span>
          </NavLink>
          <NavLink to="/history" onClick={() => 
              playlistDispatch({
                type: "SET_OPTION",
                payload: "history"
              })
            } className={({ isActive }) =>
            `${isActive ? "selected br" : ""} list-item-drawer pointer`
          }>
            <span className="material-icons-outlined">history_toggle_off</span>
            <span className="item-title">History</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};
