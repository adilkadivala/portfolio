import React, { useState } from "react";
import "../../assets/auth.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/store";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const { storeToken } = useAuth(); //context api
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [newUser, setNewUser] = useState({
    firstname: "",
    email: "",
    password: "",
    mobile_no: "",
  });

  const togglePanel = () => {
    setIsSignUp(!isSignUp);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // submitting data in dataBase

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newUser);

    try {
      const response = await axios.post(
        "http://localhost:5885/signup",
        newUser,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const res_data = response.data;
        storeToken(res_data.token, res_data.otp);
        setNewUser({
          firstname: "",
          email: "",
          password: "",
          mobile_no: "",
        });
        toast.success("Registration Successful");
        navigate("/login");
      } else {
        toast.error(
          response.data.extraDetails
            ? response.data.extraDetails
            : response.data.message
        );
      }
    } catch (error) {
      console.log("SignUp", error);
      toast.error("Network Error: Unable to connect to the server");
    }
  };

  // handling input

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  return (
    <>
      <div id="authContainer" className={!isSignUp ? "right-panel-active" : ""}>
        {/* Sign up Form */}
        <div className="form_container sign_up">
          <form method="POST" onSubmit={handleSubmit}>
            <h1 className="grey">Create an Account</h1>
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
            <h6 className="grey">Or enter your personal details</h6>
            <div className="user icon">
              <input
                type="text"
                id="user"
                name="firstname"
                placeholder="Full Name"
                value={newUser.firstname}
                required
                autoComplete="given-name"
                onChange={handleInput}
              />
              <i className="fa fa-user fa-sm"></i>
            </div>
            <div className="email icon">
              <input
                type="email"
                id="email_up"
                name="email"
                value={newUser.email}
                placeholder="Email address"
                required
                autoComplete="off"
                onChange={handleInput}
              />
              <i className="fa fa-envelope fa-sm"></i>
            </div>
            <div className="phone icon">
              <input
                type="text"
                id="phone"
                name="mobile_no"
                placeholder="Phone number"
                required
                autoComplete="off"
                value={newUser.mobile_no}
                onChange={handleInput}
              />
              <i className="fa fa-phone fa-sm"></i>
            </div>
            <div className="password icon">
              <input
                type={showPassword ? "text" : "password"}
                id="password_up"
                name="password"
                placeholder="Password"
                required
                autoComplete="off"
                value={newUser.password}
                onChange={handleInput}
              />
              <i className="fas fa-key"></i>
              <i
                className={`show fas ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                }`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>

            <div className="submit">
              <button
                id="btnin"
                name="signup"
                type="submit"
                className="overlay_button"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>

        {/*  overlay Container  */}

        <div className="overlay_container">
          <div className="overlay">
            <div className="overlay_panel overlay_left">
              <h1>Welcome Back!</h1>
              <p>Please login with your personal details</p>
              <NavLink
                to="/login"
                type="button"
                className="overlay_button"
                onClick={togglePanel}
              >
                Log In
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
