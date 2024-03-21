import React from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/public/about.css";

const About = () => {
  return (
    <>
      <div className="Continer titleOfPage">
        <div className="path">
          <p>
            <NavLink to="/">HOME </NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
          <p>
            <NavLink to="/about"> ABOUT US </NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
        </div>
        <p className="pageName">About Us</p>
      </div>
      <div className="Continer hero_About">
        <div id="aboutWork">
          <div className="boxDetail">
            <p className="numberOfBox"> 5,000</p>
            <p className="textOfBox"> Happy Clients</p>
          </div>
          <div className="boxDetail">
            <p className="numberOfBox">1,200</p>
            <p className="textOfBox">Projects Done</p>
          </div>
          <div className="boxDetail">
            <p className="numberOfBox">500</p>
            <p className="textOfBox">Cups of Coffee</p>
          </div>
          <div className="boxDetail">
            <p className="numberOfBox">587</p>
            <p className="textOfBox">Working Hourse</p>
          </div>
        </div>

        <div id="workDetail">
          <p id="workDetail_Heading">ABOUT ME</p>
          <p id="workDetail_sub_Heading">
            A UI/UX Designer & Web Developer Based in Philippines
          </p>
          <p id="workDetail_discription">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div id="bio">
            <div className="bio_Group">
              <p className="bio_Title">Name:</p>
              <p className="bio_Description">Clyde Nowitzki</p>
            </div>
            <div className="bio_Group">
              <p className="bio_Title">Zip code:</p>
              <p className="bio_Description">1000</p>
            </div>
            <div className="bio_Group">
              <p className="bio_Title">Date of birth:</p>
              <p className="bio_Description">January 01, 1990</p>
            </div>
            <div className="bio_Group">
              <p className="bio_Title">Email:</p>
              <p className="bio_Description">cydenowitzki@gmail.com</p>
            </div>
            <div className="bio_Group">
              <p className="bio_Title">Address:</p>
              <p className="bio_Description">San Francisco CA 97987 USA</p>
            </div>
            <div className="bio_Group">
              <p className="bio_Title">Phone:</p>
              <p className="bio_Description">+1-2234-5678-9-0</p>
            </div>
            <button className="btnGeneral">DOWNLOAD CV</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
