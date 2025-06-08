import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function PrivateRoute({component: Component}) {
    const {userId} = useContext(AuthContext);

    return userId ? <Component /> : <Navigate to="/login" replace />;
}