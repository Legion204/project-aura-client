import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import app from "../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export const AuthContext = createContext({});

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    // user registration with email and pass
    const userRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // user login with email and pass
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // user login with google
    const googleProvider = new GoogleAuthProvider();
    const userLoginGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // user login with github
    const gitHubProvider = new GithubAuthProvider();
    const userLoginGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    };

    // user logout
    const userLogout = () => {
        setLoading(true)
        return signOut(auth)
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                const loggedUser = { email: currentUser.email }
                axiosSecure.post("/jwt", loggedUser)
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })
        return () => unSubscribe();
    }, [axiosSecure])

    const data = { user, userRegister, auth, loading, userLogin, userLogout, userLoginGoogle, userLoginGithub }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;