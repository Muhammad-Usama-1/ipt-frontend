import React, { useContext, useEffect, useState } from "react";

import { useNavigate, Navigate } from "react-router-dom";
import UserContext from "../context/userContext";
// import { client } from "../api/client";

const PublicRoute = ({ children }) => {
  const navigator = useNavigate();
  const { setUser, user } = useContext(UserContext);

  // const [user, setUser] = useState("aaa");
  const getUser = async () => {
    const token = localStorage.getItem("token");
    console.log("Here is there..", token);
    if (token) navigator("/feed");
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  useEffect(() => {
    getUser();
  }, [0]);

  // If there is any user from context it will replace URL to endpoint to login
  return user ? children : <Navigate to={"/login"} replace={true} />;
  // return children;
};
export default PublicRoute;
