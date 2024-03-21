import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/public/work.css";

const Work = () => {
  const workdetail = [
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work2.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work-3.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work2.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work-3.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work-3.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work2.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
    {
      img: require("../../../assets/images/work1.jpg"),
      title: "Branding & Illustration Design",
      category: "WEB DESIGN",
    },
  ];
  
  const [currentpage, setCurrentPage] = useState(1);
  const [itemperPage, setItemperPage] = useState(9);

  let totalPages = Math.ceil(workdetail.length / itemperPage);

  const getCurruntPageData = () => {
    const stIndex = (currentpage - 1) * itemperPage;
    const edIndex = stIndex + itemperPage;
    return workdetail.slice(stIndex, edIndex);
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
            <NavLink to="/">HOME </NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
          <p>
            <NavLink to="/works"> WORK </NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
        </div>
        <p className="pageName">My Works</p>
      </div>
      <div className="Continer work_I_did">
        {getCurruntPageData().map((work, i) => {
          return (
            <>
              <div className="work_Main" key={i}>
                <img src={work.img} alt="myWorks"></img>
                <div className="about_work">
                  <p className="title">{work.title}</p>
                  <p className="category">{work.category}</p>
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

export default Work;
