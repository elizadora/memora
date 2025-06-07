import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [userId, setUserId] = useState(localStorage.getItem("id"));
    const [token, setToken] = useState(localStorage.getItem("token"));


    const singIn = (id, token) => {
        setUserId(id);
        setToken(token);

        localStorage.setItem("id", id);
        localStorage.setItem("token", token);

    }

    const singOut = () => {
        setUserId(null);
        setToken(null);

        localStorage.removeItem("id");
        localStorage.removeItem("token");
    }


    return (
        <AuthContext.Provider value={{ userId, token, singIn, singOut }}>
            {children}
        </AuthContext.Provider>
    );

}