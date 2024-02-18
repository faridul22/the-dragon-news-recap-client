import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="d-flex mt-5 pt-5 justify-content-center">
            <progress></progress>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate >
};

export default PrivateRoute;