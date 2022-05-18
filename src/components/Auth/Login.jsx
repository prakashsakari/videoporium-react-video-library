import { Link } from "react-router-dom";
import { useState } from "react";
import "./Auth.css"
import { useAuth, useAlert } from "../../context";

export const AuthLogin = () => {
    const [passwordtype, setPasswordType] = useState("password");
    const {userLogin, credentials, credentialsDispatch} = useAuth();
    const { setAlert } = useAlert();

    const handleEmailInputChange = (event) => {
        credentialsDispatch({type: "EMAIL", payload: event.target.value})
    }

    const handlePasswordInputChange = (event) => {
        credentialsDispatch({type: "PASSWORD", payload: event.target.value})
    }

    const handlePasswordCheck = () => {
        passwordtype === "password" ? setPasswordType("text") : setPasswordType("password")
    }

    const handleTestCredentialsLogin = () => {
        userLogin("prakashsakari@gmail.com", "prakashSakari123", setAlert)
    }
    const handleLoginClick = (event) => {
        event.preventDefault();
        userLogin(credentials.email, credentials.password)
        credentialsDispatch({type: "CLEAR_LOGIN_CREDENTIALS"})
    }

    return (
        <div className="d-grid">
            <div className="login-auth direction-column d-flex justify-center">
                <h2 className="auth-title">Login</h2>
                <form onSubmit={handleLoginClick}>
                    <div className="form-container">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-input lh-ls"
                            placeholder="name@example.com"
                            value={credentials.email}
                            required
                            onChange={handleEmailInputChange}/>
                    </div>
                    <div className="form-container relative">
                        <label className="form-label">Password</label>
                        <input
                            type={passwordtype}
                            className="form-input lh-ls"
                            placeholder="*********"
                            value={credentials.password}
                            required
                            onChange={handlePasswordInputChange}/>
                        <button class="button cursor"
                            onClick={handlePasswordCheck}>
                            <span class="material-icons-outlined absolute pwd-icon-position">
                                visibility_off
                            </span>
                        </button>
                    </div>

                    <div className="remember">
                        <label className="padding-all-8 label-remember d-flex align-center gap-8px"><input type="checkbox" className="check-box"/>Remember me</label>
                    </div>
                    <div className="cta">
                        <button
                            className="login-btn button btn-primary cursor btn-margin sign-up-btn"
                            >
                            Login
                        </button>
                    </div>
                </form>
                <div>
                    <button
                        className="login-btn button btn-outline-primary btn-margin sign-up-btn"
                        onClick={handleTestCredentialsLogin}>
                        Login with Test Credentials
                    </button>

                    <div className="create-account d-flex align-center justify-center">
                        <Link className="button cursor create-acc" to="/signup">
                            <span className="material-icons-outlined flex-row">
                                <span className="new-account">Create New Account</span>
                                arrow_forward_ios
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}