import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Navigate, useNavigate } from "react-router-dom";

import "../styles/AuthScreensStyle.css";
import { client } from "../api/client";
import UserContext from "../context/userContext";

function LoginScreen() {
  const { setUser, user } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    // navigate("/feed");
    console.log(user);
    // if (user) navigate("/feed");
    // if (user) return navigate("/feed");
  }, [0]);

  const doLogin = async (e) => {
    try {
      e.preventDefault();
      const { data } = await client.post("/users/login", { email, password });
      console.log(data);
      localStorage.setItem("token", data.token);
      setUser(data.data);
      console.log(user);
      // setUser(...user, data.data?.posts);
      navigate("/feed");
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  };
  return (
    // user ? (
    // <Navigate to="/feed" />
    // ) : (
    <section className="sigin-page">
      <div className="container-inside">
        <div id="circle-small"></div>
        <div id="circle-medium"></div>
        <div id="circle-large"></div>
        <div id="circle-xlarge"></div>
        <div id="circle-xxlarge"></div>
      </div>
      <div className="container-auth">
        <div className="form-signin">
          <div className="sign-in-details">
            <div className="slider-box">
              <a href="/">
                <img
                  className="sign-in-details--img"
                  src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/logo-full.6a2f63c1.png"
                  alt=""
                />
              </a>
              <img
                className="sign-in-details--img"
                src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/2.a03b91c6.png"
                alt=""
              />
              <h4>Find New Real Friends</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>
          </div>
          <div className="sign-in-form">
            <div
              style={{
                marginBottom: "20px",
                fontWeight: "bold",
                fontSize: "40px",
                color: "#3F414D",
                // fontFamily: "Poppins",
              }}
            >
              Sign in
            </div>
            <p
              style={{
                marginBottom: "20px",
              }}
            >
              Get your Credentials from +923402306855 to get unlimited feature
              of admin panel
            </p>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="input-box">
              <div className="forget-box">
                <label htmlFor="email">Password</label>
                <a href="/" className="text-primary">
                  Forgot Password
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                // value={"pass1234"}
              />
            </div>
            <div className="cta-box">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
              <button onClick={doLogin} className="signin-btn">
                Sign in
              </button>
            </div>
            <div className="icon-action--box">
              <p>
                Dont have an account ? <a href="/">sign up</a>{" "}
              </p>
              <div className="login-options--icons">
                <i class="bx bxl-facebook-square"></i>
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginScreen;
