import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';
import LoadingSpinner from "../Components/LoadingSpinner";

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;