import { Link } from "react-router-dom";
import "./404.css";

export const Error = () => {
  return (
    <div className="error-page">
      <h1 className="error-title">404</h1>
      <h2 className="error-msg">
        The page you are looking for does not exist or some other error occured.
      </h2>
      <Link to="/" className="link">
        <button className="button btn-primary d-flex align-center justify-center gap cursor">
          <span class="material-icons-outlined">arrow_back</span>Go to Home Page
        </button>
      </Link>
    </div>
  );
};
