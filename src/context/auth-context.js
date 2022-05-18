import { createContext, useContext, useState, useReducer, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { credentialsReducer } from "../reducer";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [eToken, setEToken] = useState("");
    const [euser, setEUser] = useState("");
    const [credentials, credentialsDispatch] = useReducer(credentialsReducer, {email: "", password: "", userPassword:"", userConfirmPassword:"", isEmailValid:true, userEmail:"", display:"none", userName:"", userLastName:"" });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect (() => {
        const sessionToken = localStorage.getItem("token");
        const availableUser = JSON.parse(localStorage.getItem("user"));
        if (sessionToken) {
            setEToken(sessionToken)
        }
        if (availableUser){
          setEUser(availableUser.firstName)
        }
    }, [])


    const userSignup = async (firstName, email, password, setAlert) => {
        try {
            const {data: {createdUser, encodedToken}} = await axios.post("api/auth/signup", {
                email: email,
                password: password,
                firstName: firstName
            })
            
                localStorage.setItem("token", encodedToken);
                setEToken(encodedToken);
                localStorage.setItem("user", JSON.stringify(createdUser));
                setEUser(createdUser);
                navigate("/login")
                setAlert({
                    open: true,
                    message: "Account Created Successfully",
                    type: "success"
                })
                
            
        }catch(err){
            if(err.response.status === 422){
                setAlert({
                    open: true,
                    message: "User Already exists",
                    type: "error"
                })
            }
        }
    }

    const userLogin = async (email, password, setAlert) => {
        try {
            const {data : {foundUser, encodedToken}, status} = await axios.post("/api/auth/login", {
                email: email,
                password: password
            });
            if (status === 200){
                localStorage.setItem("token", encodedToken);
                setEToken(encodedToken);
                localStorage.setItem("user", JSON.stringify(foundUser))
                setEUser(JSON.parse(localStorage.getItem("user")).firstName);
                navigate(location?.state?.from?.pathname || "/", { replace: true });
                setAlert({...alert,
                open: true,
                message: "Logged In Successfully",
                type: "success"
                })
            }
        }catch (err){
            if (err.response.status === 404){
                setAlert({
                    open: true,
                    message: "User Not Found",
                    type: "error"
                })
            }
        }
    }

    const logOutHandler = (setAlert) => {
        if (eToken){
            setEToken("");
            setEUser("");
            localStorage.clear();
            navigate("/");
            setAlert({
                open: true,
                message: "Logged Out Successfully",
                type: "success"
            })
        }else{
            navigate("/login")
        }
    }

    return (
        <AuthContext.Provider value={{userLogin, userSignup, logOutHandler, eToken, credentials, credentialsDispatch, euser}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};
