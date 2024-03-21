import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/public/blog.css";

const Blog = () => {
  const blogPostes = [
    {
      img: require("../../../assets/images/work1.jpg"),
      author: "Admin ",
      date: "Jan 07, 2021",
      comments: "3",
      title: "The Newest and Updated Bootstrap 5 is Here",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: require("../../../assets/images/work2.jpg"),
      author: "Admin ",
      date: "Jan 07, 2021",
      comments: "3",
      title: "The Newest and Updated Bootstrap 5 is Here",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      author: "Admin ",
      date: "Jan 07, 2021",
      comments: "3",
      title: "The Newest and Updated Bootstrap 5 is Here",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: require("../../../assets/images/work2.jpg"),
      author: "Admin ",
      date: "Jan 07, 2021",
      comments: "3",
      title: "The Newest and Updated Bootstrap 5 is Here",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: require("../../../assets/images/work-3.jpg"),
      author: "Admin ",
      date: "Jan 07, 2021",
      comments: "3",
      title: "The Newest and Updated Bootstrap 5 is Here",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      author: "Admin ",
      date: "Jan 07, 2021",
      comments: "3",
      title: "The Newest and Updated Bootstrap 5 is Here",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: require("../../../assets/images/work2.jpg"),
      author: "Admin ",
      date: "Jan 07, 2021",
      comments: "3",
      title: "The Newest and Updated Bootstrap 5 is Here",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: require("../../../assets/images/work-3.jpg"),
      author: "Admin ",
      date: "Jan 07, 2021",
      comments: "3",
      title: "The Newest and Updated Bootstrap 5 is Here",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: require("../../../assets/images/work-3.jpg"),
      author: "Admin ",
      date: "Jan 07, 2021",
      comments: "3",
      title: "The Newest and Updated Bootstrap 5 is Here",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: require("../../../assets/images/work-3.jpg"),
      author: "Admin ",
      date: "Jan 07, 2021",
      comments: "3",
      title: "The Newest and Updated Bootstrap 5 is Here",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: require("../../../assets/images/work-3.jpg"),
      author: "Admin ",
      date: "Jan 07, 2021",
      comments: "3",
      title: "The Newest and Updated Bootstrap 5 is Here",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];

  const [currentpage, setCurrentPage] = useState(1);
  const [itemperPage, setItemperPage] = useState(8);

  let totalPages = Math.ceil(blogPostes.length / itemperPage);

  const getCurruntPageData = () => {
    const stIndex = (currentpage - 1) * itemperPage;
    const edIndex = stIndex + itemperPage;
    return blogPostes.slice(stIndex, edIndex);
  };

  // next page

  const handleNext = () => {
    if (currentpage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // previous page
  const handlePrevious = () => {
    if (currentpage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // page change

  const gotoPage = (pageNo) => {
    setCurrentPage(pageNo);
  };

  return (
    <>
      <div className="Continer titleOfPage">
        <div className="path">
          <p>
            <NavLink to="/"> HOME </NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
          <p>
            <NavLink to="/blog"> BLOG </NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
        </div>
        <p className="pageName">Blog</p>
      </div>
      {/* blog content */}
      <div className="Continer postes_I_uplode">
        {getCurruntPageData().map((blog, i) => {
          return (
            <>
              <div className="blog_Main" key={i}>
                <img src={blog.img} alt="myWorks"></img>
                <div className="blog_details">
                  <div className="time_line">
                    <p className="author">{blog.author}</p>
                    <p className="date">{blog.date}</p>
                    <p className="comment">{"comments " + blog.comments}</p>
                  </div>
                  <div className="blog_content">
                    <p className="blog_title">{blog.title}</p>
                    <p className="blog_description">{blog.description}</p>
                  </div>
                  <div className="activities">
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-regular fa-eye"></i>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        <div className="Continer pagination_btns">
          <button className="previous_btn" onClick={handlePrevious}>
            <i className="fa-solid fa-caret-left"></i>
          </button>
          {Array.from({ length: totalPages }, (skip_obj, ele) => (
            <button
              className="number_btn"
              key={ele}
              onClick={() => gotoPage(ele + 1)}
            >
              {ele + 1}
            </button>
          ))}
          <button className="next_btn" onClick={handleNext}>
            <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>

        {/* blog content */}

        {/* copy right content */}
        <div className="Continer copy">
          <p className="copyWrite">
            Copyright <span>©2024</span> All rights reserved | Made with
            <span> ❤ </span> by
            <span> Adil Kadival </span>
          </p>
        </div>
      </div>
      {/* copy right content */}
    </>
  );
};

export default Blog;
