import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Root = () => {
    return (
        <div className="container mx-auto">
            <div className="sticky top-0 z-50">
            <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default Root;