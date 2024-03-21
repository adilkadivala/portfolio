import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/public/home.css";

// image slider

const imgSLider = [
  require("../../../assets/images/image1.png"),
  require("../../../assets/images/image.png"),
];

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);
  // next
  const handleNext = () => {
    setActiveImage((prevIndex) => (prevIndex + 1) % imgSLider.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeImage]);

  return (
    <>
      <div id="hero_Main">
        <div className="heroContent">
          <p>UI/UX DESIGNER & DEVELOPER</p>
          <h1>I'm Adil Kadival</h1>
          <div id="btnGroup">
            <NavLink to="/about">
              <button className="btnGeneral">
                More About Me <i className="fa-solid fa-arrow-right"></i>
              </button>
            </NavLink>

            <button className="secondoryBtn">
              Hire Me <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="copyWrite">
            Copyright <span>©2024</span> All rights reserved | Made with
            <span> ❤ </span> by
            <span> Adil Kadival </span>
          </div>
        </div>
        <div className="heroSlide">
          {imgSLider.map((path, i) => {
            return (
              <>
                <img
                  key={i}
                  src={path}
                  alt="imageSLider"
                  className={activeImage === i ? "images" : "imagesHide"}
                ></img>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;
