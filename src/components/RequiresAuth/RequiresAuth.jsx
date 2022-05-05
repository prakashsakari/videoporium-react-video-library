import { useLocation, Navigate } from "react-router-dom"
import { useAuth } from "../../context";

export const RequiresAuth = ({children}) => {
    const location = useLocation();
    const sessionToken = localStorage.getItem("token");
    const {eToken} = useAuth();

    return sessionToken ? children : <Navigate to="/login" state={{from: location}} replace />
}