import React from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/public/contect.css";

const Contact = () => {
  return (
    <>
      <div className="Continer titleOfPage">
        <div className="path">
          <p>
            <NavLink to="/">HOME </NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
          <p>
            <NavLink to="/contact"> CONTACT US </NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
        </div>
        <p className="pageName">Contact Us</p>
      </div>
      <div className="Continer form_body">
        <div className="form_content">
          <p className="form_title">Contact us</p>
          <p className="welcome_text">
            We're open for any suggestion or just to have a chat
          </p>
          <div className="form_address">
            <div className="address_user">
              <p className="title">ADDRESS:</p>
              <p className="description">
                198 West 21th Street, Suite 721 New York NY 10016
              </p>
            </div>
            <div className="email_user">
              <p className="title">EMAIL:</p>
              <p className="description">info@yoursite.com</p>
            </div>
            <div className="phone_user">
              <p className="title">PHONE:</p>
              <p className="description">+ 1235 2355 98</p>
            </div>
          </div>
          <div className="main_form">
            <input type="text" placeholder="name"></input>
            <input type="email" placeholder="email"></input>
            <input type="text" placeholder="subject"></input>
            <div>
              <textarea
                placeholder="What do you want to say"
                defaultValue="Enter Message Here"
              ></textarea>
            </div>
            <button className="btnGeneral contact_btn" typeof="submit">
              SEND MESSAGE
            </button>
          </div>

          <p className="social_text">Follow us here</p>
          <div className="social_media">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
        <div className="form_image">
          <img
            src={require("../../../assets/images/contact.jpg")}
            alt="contact_man"
          ></img>
        </div>
      </div>

      <div className="Continer copy_content">
        <p className="copyWrite">
          Copyright <span>©2024</span> All rights reserved | Made with
          <span> ❤ </span> by
          <span> Adil Kadival </span>
        </p>
      </div>
    </>
  );
};

export default Contact;
