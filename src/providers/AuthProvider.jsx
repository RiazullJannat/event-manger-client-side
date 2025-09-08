import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [events, setEvents] = useState([]);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const setProfile = (user, name) => {
        setLoading(true);
        return updateProfile(user, {
            displayName: name
        })
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signout = () => {
        return signOut(auth);
    }

    const google = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])
    const val = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        setProfile,
        login,
        signout,
        events,
        setEvents,
        google
    }
    return (
        <AuthContext.Provider value={val}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;