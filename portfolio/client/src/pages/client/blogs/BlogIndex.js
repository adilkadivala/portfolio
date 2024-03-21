import React from "react";
import Navbar from "../layouts/Navbar";
import Blog from "./Blog";

const BlogIndex = () => {
  return (
    <>
      <section id="blogSection">
        <Navbar />
        <Blog />
      </section>
    </>
  );
};

export default BlogIndex;
