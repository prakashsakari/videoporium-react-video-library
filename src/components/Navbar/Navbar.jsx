import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./Navbar.css";
import { useCategory } from "../../context";
export const Navbar = () => {

  const {categoryDispatch} = useCategory();

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
      <div className="search-box-container relative">
        <input
        onChange={(e) =>
          categoryDispatch({
            type: "SEARCH",
            payload: e.target.value
          })}
          className="search-box padding-all-8 border-radius-4"
          type="text"
          placeholder="Search"
        />
        <img
          src="https://therightfit.netlify.app/assets/outline_search_black_24dp.png"
          alt="Search"
          className="search-icon absolute left-0 top-0"
        />
      </div>
      <nav class="navigation">
        <ul class="list-non-bullet d-flex align-center gap">
          <li class="list-item-inline">
            <Link to="/login" class="link cursor">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
