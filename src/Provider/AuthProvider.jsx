import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext= createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const[loading,setLoading]=useState(true);

    // user registration with email and pass
    const userRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const data= {userRegister,auth}
    return (
        <AuthContext.Provider value={data}>
            { children }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;