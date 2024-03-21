import React, { useState } from "react";
import "../../assets/auth.css";
import { toast } from "react-toastify";
import { useAuth } from "../../context/store";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { storeToken } = useAuth(); //context api

  // login state

  const [checkUser, setCheckUser] = useState({
    email: "",
    password: "",
    otp: "",
  });

  // login logic

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5885/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkUser),
      });

      const res_data = await response.json();
      console.log(res_data, 31);
      console.log(res_data.otp, 32);

      if (response.ok) {
        storeToken(res_data.token);
        setCheckUser({
          email: "",
          password: "",
          otp: "",
        });
        toast.success("Loged in Successfully");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
      console.log(response);
    } catch (error) {
      console.log("Login", error);
    }
  };

  const togglePanel = () => {
    setIsSignUp(!isSignUp);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // input handling;

  const handleInput = async (e) => {
    const { name, value } = e.target;

    setCheckUser({
      ...checkUser,
      [name]: value,
    });
  };

  return (
    <>
      <div id="authContainer" className={isSignUp ? "right-panel-active" : ""}>
        <div className="form_container sign_in">
          <form onSubmit={handleLogin} className="authForm">
            <h1 className="grey">Log in</h1>

            <div className="rs_icons">
              <NavLink to="">
                <i className="fab fa-facebook-f"></i>
              </NavLink>
              <NavLink to="">
                <i className="fab fa-google"></i>
              </NavLink>
              <NavLink to="">
                <i className="fab fa-linkedin-in"></i>
              </NavLink>
              <NavLink to="">
                <i className="fab fa-github"></i>
              </NavLink>
            </div>
            <h6 className="grey">Or enter your login details</h6>
            <div className="email icon">
              <input
                type="email"
                id="email_in"
                name="email"
                value={checkUser.email}
                autoComplete="off"
                onChange={handleInput}
                placeholder="Email address"
                required
              />
              <i className="fa fa-envelope fa-sm"></i>
            </div>
            <div className="password icon">
              <input
                type={showPassword ? "text" : "password"}
                id="password_up"
                name="password"
                autoComplete="off"
                value={checkUser.password}
                placeholder="Password"
                onChange={handleInput}
                required
              />
              <i className="fas fa-key"></i>
              <i
                className={`show fas ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                }`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
            <div className="password icon">
              <input
                type="text"
                placeholder="Enter OTP here"
                required
                name="otp"
                value={checkUser.otp}
                onChange={handleInput}
                autoComplete="off"
              />
            </div>
            <br />

            <br />
            <div className="submit">
              <button
                id="btnin"
                name="signin"
                type="submit"
                onClick={handleLogin}
                className="overlay_button"
              >
                Log In
              </button>
            </div>
            <br />
            <br />
            <br />
            <div className="remember grey">
              <h5>
                Forgot Password !! <NavLink>Click Here</NavLink> To Backup
                Account
              </h5>
            </div>
          </form>
        </div>

        <div className="overlay_container">
          <div className="overlay">
            <div className="overlay_panel overlay_right">
              <h1>Hello dear Friend!</h1>
              <p>Do you want to become part of our community?</p>
              <NavLink
                to="/signup"
                type="button"
                className="overlay_button"
                onClick={togglePanel}
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
