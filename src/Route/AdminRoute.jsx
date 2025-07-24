import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = (children) => {
    const {user, loading} = useAuth()
    const [isAdmin , isAdminLoading] = useAdmin()
      const location = useLocation();

    if(loading || isAdminLoading) return <p className=" text-red-400">loading...</p>

    if(user && isAdmin) return children;

    return <Navigate to='/signIn' state={{from: location}} replace></Navigate>
};

export default AdminRoute;