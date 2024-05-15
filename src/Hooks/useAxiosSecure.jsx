import axios from "axios";
// import { useContext, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import useAuth from "./useAuth";
// import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

const useAxiosSecure = () => {
    // const { userLogout } = useAuth();
    // const {userLogout}= useContext(AuthContext);


    // useEffect(() => {
    //     axiosSecure.interceptors.response.use(res => {
    //         return res;
    //     }, error => {
    //         console.log(error);
    //         if (error.response.status === 401 || error.response.status === 403) {
    //             userLogout()
    //                 .then(() => {
    //                     <Navigate to={"/login"}></Navigate>
    //                 })
    //         }
    //     })
    // }, [userLogout])


    return axiosSecure;
};

export default useAxiosSecure;