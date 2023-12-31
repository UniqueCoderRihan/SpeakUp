import { useContext } from "react";
import {AuthContex} from '../Providers/AuthProvider'
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContex);
    const location = useLocation();
    if(loading){
        // TODO: UPDATEed SPINNER
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to='/login' state={{from:location}} replace={true}></Navigate>
    );
};

export default PrivateRoute;