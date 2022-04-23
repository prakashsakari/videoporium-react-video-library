import { Link } from "react-router-dom";
import "./SideBar.css";

export const SideBar = () => {
  return (
    <aside class="hero-drawer" id="Drawer">
      <div class="drawer-content">
        <nav class="drawer-content-list">
          <Link to="/" class="list-item-drawer">
            <span class="material-icons-outlined">explore</span>
            <span class="item-title">Home</span>
          </Link>
          <Link to="/liked" class="list-item-drawer">
            <span class="material-icons-outlined">thumb_up_off_alt</span>
            <span class="item-title">Liked</span>
          </Link>
          <Link to="/playlist" class="list-item-drawer">
            <span class="material-icons-outlined">playlist_add_circle</span>
            <span class="item-title">Playlist</span>
          </Link>
          <Link to="/watchlater" class="list-item-drawer">
            <span class="material-icons-outlined">browse_gallery</span>
            <span class="item-title">Watch Later</span>
          </Link>
          <Link to="/history" class="list-item-drawer">
            <span class="material-icons-outlined">history_toggle_off</span>
            <span class="item-title">History</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
};
