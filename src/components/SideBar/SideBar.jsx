import { useNavigate } from "react-router-dom";
import "./SideBar.css";

export const SideBar = () => {
  const navigate = useNavigate();

  return (
    <aside className="hero-drawer" id="Drawer">
      <div className="drawer-content">
        <nav className="drawer-content-list">
          <div onClick={() => navigate("/")} className="list-item-drawer pointer">
            <span className="material-icons-outlined">explore</span>
            <span className="item-title">Home</span>
          </div>
          <div
            onClick={() => navigate("/liked")}
            className="list-item-drawer pointer"
          >
            <span className="material-icons-outlined">thumb_up_off_alt</span>
            <span className="item-title">Liked</span>
          </div>
          <div onClick={() => navigate("/playlist")} className="list-item-drawer pointer">
            <span className="material-icons-outlined">playlist_add_circle</span>
            <span className="item-title">Playlist</span>
          </div>
          <div onClick={() => navigate("/watchlater")} className="list-item-drawer pointer">
            <span className="material-icons-outlined">browse_gallery</span>
            <span className="item-title">Watch Later</span>
          </div>
          <div onClick={() => navigate("/history")} className="list-item-drawer pointer">
            <span className="material-icons-outlined">history_toggle_off</span>
            <span className="item-title">History</span>
          </div>
        </nav>
      </div>
    </aside>
  );
};
