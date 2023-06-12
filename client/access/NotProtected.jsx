/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const NotProtected = ({ children }) => {
    const loggedIn = localStorage.getItem("userSession");
    if (loggedIn !== null) {
        return <Navigate to="/stats" replace />;
    }
    return children;
};

export default NotProtected;
