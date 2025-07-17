import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext)
    if(loading) return <p className=" text-red-400">loading...</p>
    if(user) return children
    return <Navigate to='/signIn' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;