import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ component: Component }) {
    const { userAuth, loading } = useContext(AuthContext);

    if (loading) {
        return <p>Carregando sessão...</p>;
    }

    return userAuth ? <Component /> : <Navigate to="/login" replace />;
}