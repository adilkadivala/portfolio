import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../../assets/css/public/navbar.css";

const Navbar = () => {
  const [navPages, setNavPages] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const handleBar = () => {
    setNavPages(!navPages);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavPages(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav id="Nav_Main" ref={navRef}>
        <div className="Continer nav_Conatiner">
          <NavLink to="/">
            <p id="brandName">Kadi</p>
          </NavLink>
          <button id="toggelButton">
            <i
              className={
                navPages === false ? "fa-solid fa-bars" : "fa-solid fa-xmark"
              }
              onClick={handleBar}
            ></i>

            <ul className={navPages === false ? "pagesHide" : "pagesShow"}>
              <li className={location.pathname === "/" ? "active" : ""}>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li className={location.pathname === "/about" ? "active" : ""}>
                <NavLink to="/about"> About </NavLink>
              </li>
              <li className={location.pathname === "/service" ? "active" : ""}>
                <NavLink to="/service"> Services </NavLink>
              </li>
              <li
                className={location.pathname === "/exprience" ? "active" : ""}
              >
                <NavLink to="/exprience"> Expriences </NavLink>
              </li>
              <li className={location.pathname === "/works" ? "active" : ""}>
                <NavLink to="/works"> Works </NavLink>
              </li>
              <li className={location.pathname === "/blog" ? "active" : ""}>
                <NavLink to="/blog"> Blogs </NavLink>
              </li>
              <li className={location.pathname === "/contact" ? "active" : ""}>
                <NavLink to="/contact"> Contact </NavLink>
              </li>
            </ul>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
