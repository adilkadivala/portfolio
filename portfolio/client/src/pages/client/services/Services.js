import React from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/public/services.css";

const Services = () => {
  return (
    <>
      <div className="Continer titleOfPage">
        <div className="path">
          <p>
            <NavLink to="/"> HOME </NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
          <p>
            <NavLink to="/service"> SERVICES </NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
        </div>
        <p className="pageName">What I Do?</p>
      </div>

      <div className="Continer abilities_I_can">
        <div className="chield_Abilities">
          <i className="fa-solid fa-paint-roller"></i>
          <p className="ability_heading">UI/UX Design</p>
          <p className="ability_description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="chield_Abilities">
          <i className="fa-brands fa-squarespace"></i>
          <p className="ability_heading">Web Development</p>
          <p className="ability_description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="chield_Abilities">
          <i className="fa-solid fa-spray-can"></i>
          <p className="ability_heading">Graphic Design</p>
          <p className="ability_description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="chield_Abilities">
          <i className="fa-solid fa-ribbon"></i>
          <p className="ability_heading">Branding</p>
          <p className="ability_description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="chield_Abilities">
          <i className="fa-solid fa-film"></i>
          <p className="ability_heading">Marketing</p>
          <p className="ability_description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="chield_Abilities">
          <i className="fa-brands fa-android"></i>
          <p className="ability_heading">Android Development</p>
          <p className="ability_description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="chield_Abilities">
          <i className="fa-solid fa-snowflake"></i>
          <p className="ability_heading">IT Cunsoltancy</p>
          <p className="ability_description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="chield_Abilities">
          <i className="fa-solid fa-gears"></i>
          <p className="ability_heading">IT Solution</p>
          <p className="ability_description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="Continer copy">
          <p className="copyWrite">
            Copyright <span>©2024</span> All rights reserved | Made with
            <span> ❤ </span> by
            <span> Adil Kadival </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
