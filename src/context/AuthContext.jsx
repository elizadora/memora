import { createContext, useState, useEffect } from "react";
import { auth } from "../services/firebaseConfig";

import {signInWithEmailAndPassword} from 'firebase/auth';

import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userAuth, setUserAuth] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const token = await firebaseUser.getIdToken();
                setUserAuth({
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    token: token
                });
            } else {
                setUserAuth(null);
            }
            setLoading(false);
        });

        return () => unsubscribe(); 
    }, []);

    const signIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            return true;
        } catch (error) {
            console.error("Erro no login:", error);
            return false;
        }
    };

    const signOut = async () => {
        try {
            await auth.signOut();

        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ 
            userAuth, 
            loading,
            signIn, 
            signOut 
        }}>
            {children}
        </AuthContext.Provider>
    );
};