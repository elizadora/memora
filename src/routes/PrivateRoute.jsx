import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ component: Component }) {
    const { userAuth, loading, logged } = useContext(AuthContext);

    if (loading) {
        return <p>Carregando sessão...</p>;
    }

    if(!userAuth && logged) {
        return <Navigate to="/" replace />;
    }

    if (logged) {
        return <Navigate to="/login" replace />;
    }


    return <Component />;
}