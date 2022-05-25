import logo from "../../assets/logo.png"
import "./Navbar.css";
import { useCategory, useAuth, usePlaylist, useAlert } from "../../context";
import { debounce } from "lodash";

export const Navbar = ({route}) => {

  const {categoryDispatch} = useCategory();

  const {setAlert} = useAlert();

  const { logOutHandler, eToken, euser
  } = useAuth();

  const { playlistDispatch} = usePlaylist();

  const handleLogoutClick = () => {
    logOutHandler(setAlert);
    playlistDispatch({
      type: "CLEAR_ALL"
  })
  }

  const handleSearch = debounce((e) => {
    categoryDispatch({
      type: "SEARCH",
      payload: e.target.value
    })
  }, 500)

  return (
    <header class="heading d-flex align-center fixed top-0 left-0">
      <div class="heading-title-icon d-flex  align-center">
        <img
          className="icon mr-1 border-radius-50"
          src={logo}
          alt="icon"
        />
        <h1 className="heading-title">
          <a class="link" href="/">
            Videoporium
          </a>
        </h1>
      </div>
      {route !== "login" && route !== "signup" && route !== "videoDetails" && <div className="search-box-container relative">
        <input
        onChange={handleSearch}
          className="search-box padding-all-8"
          type="text"
          placeholder="Search"
        />
        <span class="search-icon material-icons-outlined absolute">
          search
        </span>
      </div>}
      
      
      <nav class="navigation">
        <ul class="list-non-bullet d-flex align-center gap">
        {eToken && euser.length > 0 ? (
            <li className="list-item-inline">{`Hi, ${euser}`}</li>
          ) : ""}
          <li class="list-item-inline">
          <button
            to="/login"
            class="cursor button btn-primary auth-btn"
            onClick={handleLogoutClick}>{eToken
                ? "Logout"
                : "Login"}
          </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
