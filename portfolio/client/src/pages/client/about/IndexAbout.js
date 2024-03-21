import React from "react";
import Navbar from "../layouts/Navbar";
import About from "./About";
import Skills from "./Skills";
import Testimonial from "./Testimonial";

const IndexAbout = () => {
  return (
    <>
      <section id="mainSection">
        <Navbar />
        <About />
        <Skills />
        <Testimonial />
      </section>
    </>
  );
};

export default IndexAbout;
