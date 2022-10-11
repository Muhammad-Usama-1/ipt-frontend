import React, { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
// import { client } from "../api/client";

const PublicRoute = ({ children }) => {
  const navigator = useNavigate();
  const { setUser, user } = useContext(UserContext);

  //   const [, setUser] = useState("");
  const getUser = async () => {
    const token = localStorage.getItem("token");
    if (token) navigator("/feed");
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  useEffect(() => {
    getUser();
  }, [0]);

  // return user ? children : <navigation  to={"/login"} />;
  return children;
};
export default PublicRoute;
