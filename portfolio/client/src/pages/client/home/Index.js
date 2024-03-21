import React from "react";
import Hero from "./Hero";
import Navbar from "../layouts/Navbar";

const Index = () => {
  return (
    <>
      <section id="homeSection">
        <Navbar />
        <Hero />
      </section>
    </>
  );
};

export default Index;
