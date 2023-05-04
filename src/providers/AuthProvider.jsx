import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const forgotPass = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        forgotPass,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;