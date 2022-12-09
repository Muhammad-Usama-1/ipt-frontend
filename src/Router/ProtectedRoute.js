import React from "react";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If there is any user from context it will replace URL to endpoint to login
  return token ? children : <Navigate to={"/login"} replace={true} />;
  // return children;
};
export default ProtectedRoute;
