import React, { useState, useEffect } from "react";
import "../../../assets/css/public/about.css";

const Testimonial = () => {
  const testimonialSlider = [
    {
      img: require("../../../assets/images/image1.png"),
      name: "K-ADI",
      roll: "SEO",
      says: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      img: require("../../../assets/images/image.png"),
      name: "D.Morgen",
      roll: "FullStack",
      says: "there was a prize distributuon function in our, far from the countries Vokalia and Consonantia,",
    },
    {
      img: require("../../../assets/images/image1.png"),
      name: "David Malan",
      roll: "S/E",
      says: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      img: require("../../../assets/images/image.png"),
      name: "Michel Marsh",
      roll: "S/E",
      says: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      img: require("../../../assets/images/image1.png"),
      name: "Abraham Soul",
      roll: "S/E",
      says: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      img: require("../../../assets/images/image1.png"),
      name: "Abraham Soul",
      roll: "S/E",
      says: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      img: require("../../../assets/images/image1.png"),
      name: "Abraham Soul",
      roll: "S/E",
      says: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      img: require("../../../assets/images/image1.png"),
      name: "Abraham Soul",
      roll: "S/E",
      says: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      img: require("../../../assets/images/image1.png"),
      name: "Abraham Soul",
      roll: "S/E",
      says: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      img: require("../../../assets/images/image1.png"),
      name: "Abraham Soul",
      roll: "1",
      says: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  //   next handling button
  const handleNext = () => {
    setActiveSlide((prevIndex) => (prevIndex + 1) % 3);
  };
  //   next handling button

  //   previous handling button
  const handlePrevious = () => {
    setActiveSlide((prevIndex) => (prevIndex - 1 + 3) % 3);
  };
  //   previous handling button

  //   making slider auto
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeSlide]);
  //   making slider auto

  return (
    <>
      {/* title of component */}
      <div className="Continer thirdTitle">
        <p className="tinyHeading">TESTIMONIAL</p>
        <p className="pageName">Happy Guests</p>
      </div>
      {/* title of component */}

      {/* slider */}
      <div className="Continer slider_Container">
        <div className="slider_parent">
          {testimonialSlider
            .slice(
              activeSlide,
              activeSlide +
                (window.innerWidth <= 768
                  ? window.innerWidth <= 426
                    ? 1
                    : 2
                  : 3)
            )
            .map((slider, i) => (
              <div className="chield" key={i}>
                <div className="aboutUser">
                  <div className="userDP">
                    <img src={slider.img} alt="Testimonial user"></img>
                    <div className="quotation">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                  </div>

                  <div className="userDetail">
                    <p className="userName">{slider.name}</p>
                    <p className="userRoll">{slider.roll}</p>
                  </div>
                </div>
                <div className="testimonial_text">
                  <p>{slider.says}</p>
                </div>
              </div>
            ))}

          <div id="slider_btn">
            <button id="previous_button" onClick={handlePrevious}></button>
            <button id="next_button" onClick={handleNext}></button>
          </div>
        </div>

        <div className="Continer copy">
          <p className="copyWrite">
            Copyright <span>©2024</span> All rights reserved | Made with
            <span> ❤ </span> by
            <span> Adil Kadival </span>
          </p>
        </div>
      </div>
      {/* slider */}
    </>
  );
};

export default Testimonial;
