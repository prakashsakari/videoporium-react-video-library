import {Link} from "react-router-dom";
import "./Auth.css"
import {useAuth} from "../../context";
import {useState} from "react";

export const AuthLogin = () => {
    const [passwordtype, setPasswordType] = useState("password");
    const {userLogin, credentials, credentialsDispatch} = useAuth();

    return (
        <div className="d-grid">
            <div className="login-auth direction-column d-flex justify-center">
                <h2 className="auth-title">Login</h2>
                <div className="form-container">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-input lh-ls"
                        placeholder="name@example.com"
                        value={credentials.email}
                        onChange={(event) => credentialsDispatch({type: "EMAIL", payload: event.target.value})}/>
                </div>
                {!credentials.isEmailValid && credentials.email !== "" && (
                    <p className="pass-check-text">
                        Please enter a valid email id
                    </p>
                )}
                <div className="form-container relative">
                    <label className="form-label">Password</label>
                    <input
                        type={passwordtype}
                        className="form-input lh-ls"
                        placeholder="*********"
                        value={credentials.password}
                        onChange={(event) => credentialsDispatch({type: "PASSWORD", payload: event.target.value})}/>
                    <button class="button cursor"
                        onClick={() =>
                            passwordtype === "password"
                            ? setPasswordType("text")
                            : setPasswordType("password")
                        }>
                        <span class="material-icons-outlined absolute pwd-icon-position">
                            visibility_off
                        </span>
                    </button>
                </div>

                <div className="remember">
                    <input type="checkbox" className="check-box"/>
                    <label className="padding-all-8 label-remember">Remember me</label>
                    <button className="button btn-link-primary cursor mg-left">
                        <Link className="link-primary" to="/login">
                            Forgot your Password?
                        </Link>
                    </button>
                </div>
                <div className="cta">
                    <button
                        className="login-btn button btn-primary cursor btn-margin sign-up-btn"
                        onClick={() => {
                        if (credentials.email !== "" && credentials.password !== "") {
                            userLogin(credentials.email, credentials.password)
                        }
                        credentialsDispatch({type: "CLEAR_LOGIN_CREDENTIALS"})
                    }}>
                        Login
                    </button>
                    <button
                        className="login-btn button btn-primary cursor btn-margin sign-up-btn"
                        onClick={() => userLogin("adarshbalika@gmail.com", "adarshBalika123")}>
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