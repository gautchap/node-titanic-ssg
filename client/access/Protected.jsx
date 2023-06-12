/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    const loggedIn = localStorage.getItem("userSession");
    if (loggedIn == null) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default Protected;
