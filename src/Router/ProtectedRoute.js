import React from "react";

import { Navigate } from "react-router-dom";
// import UserContext from "../context/userContext";
// import { client } from "../api/client";

const ProtectedRoute = ({ children }) => {
  //   const navigate = useNavigate();
  //   const { setUser, user } = useContext(UserContext);
  //   console.log("user is --->", user);

  const token = localStorage.getItem("token");

  // const [user, setUser] = useState("aaa");
  const getUser = async () => {
    const token = localStorage.getItem("token");
    // Get Token from Localstorage
    // if there is token get my profile detais and set it to user

    // if (token) setUser(true);
    // console.log(user);

    // if (token) navigate("/feed");
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  //   useEffect(() => {
  //     getUser();
  //   }, [0]);

  // If there is any user from context it will replace URL to endpoint to login
  return token ? children : <Navigate to={"/login"} replace={true} />;
  // return children;
};
export default ProtectedRoute;
