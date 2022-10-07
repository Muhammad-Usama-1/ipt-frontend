import React from "react";
import { useNavigate } from "react-router-dom";
// import ".";
import "../styles/AuthScreensStyle.css";
// import "../styles/";

function SignupScreen() {
  const navigate = useNavigate();
  const doLogin = () => {
    navigate("/feed");
  };
  return (
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
              Sign Up
            </div>
            <p
              style={{
                marginBottom: "20px",
              }}
            >
              Get your Credentials by sign up or contact from +923402306855 to
              get unlimited feature of admin panel
            </p>
            <div className="input-box">
              <label htmlFor="name">Your Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={"user@usamaapp.com"}
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
                className="custom-input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={"pass1234"}
              />
            </div>
            <div className="cta-box">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">
                I accept
                <a href="/">terms and conditions</a>
              </label>
              <button onClick={doLogin} className="signin-btn">
                Sign Up
              </button>
            </div>
            <div className="icon-action--box">
              <p>
                Alreay have an account ? <a href="/">Login</a>
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

export default SignupScreen;
