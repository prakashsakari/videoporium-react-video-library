import "./Auth.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context";

export const AuthSignUp = () => {
    const [passwordtype, setPasswordType] = useState("password");
    const [confirmPasswordtype, setConfirmPasswordType] = useState("password");

    const {
        credentials: { userPassword, userConfirmPassword, isEmailValid, userEmail, display, userName, userLastName },
        credentialsDispatch, userSignup
    } = useAuth();

    const handleFirstName = (event) => {
        credentialsDispatch({
            type: "FIRST_NAME",
            payload: event.target.value
        })
    }

    const handleLastName = (event) => {
        credentialsDispatch({
            type: "LAST_NAME",
            payload: event.target.value
        })
    }

    const handleEmailChange = (event) => {
        credentialsDispatch({
            type: "EMAIL_CHECK",
            payload: event.target.value
        })
    }

    const handlePasswordChange = (event) => {
        credentialsDispatch({
            type: "PASSWORD_CHECK",
            payload: event.target.value
        })
    }

    const handleConfirmPasswordChange = (event) => {
        credentialsDispatch({
            type: "CONFIRM_PASS_CHECK",
            payload: event.target.value
        })
    }

    const handleCreateAccount = () => {
        userSignup(userName, userEmail, userPassword)
        credentialsDispatch({
            type: "CLEAR_INPUT"
        })
    }

    const handlePasswordTypeCheck = () => {
        passwordtype === "password"
            ? setPasswordType("text")
            : setPasswordType("password")
    }

    const handleConfirmPasswordTypeCheck = () =>{
        confirmPasswordtype === "password"
            ? setConfirmPasswordType("text")
            : setConfirmPasswordType("password")
    }

    const getClassName = (display) =>
        display === "none" ? "pass-check-text display-n" : "pass-check-text";

    const getButtonState = (userPassword, userConfirmPassword) => {
        return userPassword !== userConfirmPassword ||
        userPassword.length < 6 ||
        userPassword === "" ||
        !userPassword.match("^[A-Za-z0-9]+$") ||
        userEmail === "" ||
        userName === ""
        ? true
        : false;
    };

    return (
        <div className="d-grid">
        <div className="login-auth direction-column d-flex justify-center">
            <h2 className="auth-title">Signup</h2>
            <div className="form-container">
            <label className="form-label">Firtsname</label>
            <input
                type="text"
                className="form-input lh-ls"
                placeholder="Prakash"
                value={userName}
                onChange={handleFirstName}
            />
            </div>
            <div className="form-container">
            <label className="form-label">Last Name</label>
            <input
                type="text"
                className="form-input lh-ls"
                placeholder="Sakari"
                value={userLastName}
                onChange={handleLastName}
            />
            </div>

            <div className="form-container">
            <label className="form-label">Email address</label>
            <input
                type="email"
                className="form-input lh-ls"
                placeholder="name@example.com"
                value={userEmail}
                onChange={handleEmailChange}
            />
            </div>
            {!isEmailValid && userEmail !== "" && (
            <p className="pass-check-text">
                Please enter a valid Email-id e.g name@example.com
            </p>
            )}

            <div className="form-container relative">
            <label className="form-label">Password</label>
            <input
                type={passwordtype}
                className="form-input lh-ls"
                placeholder="*********"
                value={userPassword}
                onChange={handlePasswordChange}
            />
            <button
                className="button cursor"
                onClick={handlePasswordTypeCheck}
            >
                <span className="material-icons-outlined absolute pwd-icon-position">
                visibility_off
                </span>
            </button>
            </div>
            <div className={display === "none" ? "pass-check-text display-n" : "pass-check-text"}>
            <span>Password must contain atleast 6 characters</span>
            <span>Password cannot contain any special character(@,_,#,..)</span>
            </div>
            <div className="form-container relative">
            <label className="form-label">Confirm Password</label>
            <input
                type={confirmPasswordtype}
                className="form-input lh-ls"
                placeholder="*********"
                value={userConfirmPassword}
                onChange={handleConfirmPasswordChange}
            />
            <button
                className="button cursor"
                onClick={handleConfirmPasswordTypeCheck}
            >
                <span className="material-icons-outlined absolute pwd-icon-position">
                visibility_off
                </span>
            </button>
            </div>
            {userPassword !== userConfirmPassword && userConfirmPassword !== "" && (
            <p className="pass-check-text">Passwords don't match</p>
            )}

            <div className="remember">
            <label className="padding-all-8 label-remember d-flex align-center gap-8px">
            <input type="checkbox" className="check-box" />  I accept all Terms & Conditions
            </label>
            </div>

            <div className="cta">
                <button
                disabled={getButtonState(userPassword, userConfirmPassword)}
                className="login-btn button btn-primary cursor btn-margin sign-up-btn"
                onClick={handleCreateAccount}
                >
                Create New Account
                </button>
            
            <div className="create-account d-flex align-center justify-center">
                <Link to="/login">
                <button className="button cursor">
                    <span className="material-icons-outlined flex-row">
                    <span className="new-account">Already have an Account</span>
                    arrow_forward_ios
                    </span>
                </button>
                </Link>
            </div>
            </div>
        </div>
        </div>
    );
};
