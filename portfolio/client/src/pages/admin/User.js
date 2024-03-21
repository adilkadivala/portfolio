import React, { useEffect, useState } from "react";
import Navbar from "../admin/layouts/Navbar";
import { NavLink } from "react-router-dom";
import Sidebar from "../admin/layouts/Sidebar";
import "../../assets/css/admin/userprofile.css";

const User = () => {
  const [sidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarHidden(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Sidebar isOpen={!sidebarHidden} />
      <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />

      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <ul className="breadcrumb">
                <li>
                  <NavLink to="/user">Dashboard</NavLink>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <NavLink className="active" to="/">
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink to="" className="btn-download">
              <i className="bx bxs-cloud-download"></i>
              <span className="text">Download PDF</span>
            </NavLink>
          </div>

          <div className="table-data">
            <div className="order">
              <div className="main_container">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div className="semi_container">
                    {/* <!-- Page title --> */}
                    <div className="my-5">
                      <h3>My Profile</h3>
                      <hr style={{ width: "50%", margin: "0 auto" }} />
                    </div>
                    {/* <!-- Form START --> */}
                    <form
                      className="file-upload"
                      style={{ padding: "10px" }}
                      name="editProfile"
                    >
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          height: "282px",
                        }}
                      >
                        {/* <!-- Contact detail --> */}
                        <div style={{ width: "60%" }}>
                          <div className="">
                            <h4 style={{ textAlign: "center" }}>
                              Contact detail
                            </h4>
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                              }}
                            >
                              {/* <!-- First Name --> */}
                              <div className="">
                                <label className="form-label">
                                  First Name *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="First name"
                                />
                              </div>
                              {/* <!-- Last name --> */}
                              <div className="">
                                <label className="form-label">
                                  Last Name *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Last name"
                                />
                              </div>
                              {/* <!-- Date of Birth --> */}
                              <div className="">
                                <label className="form-label">
                                  Date of Birth *
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Phone number"
                                />
                              </div>
                              {/* <!-- Mobile number --> */}
                              <div className="">
                                <label className="form-label">
                                  Mobile number *
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Phone number"
                                />
                              </div>
                              {/* <!-- Email --> */}
                              <div className="">
                                <label
                                  htmlFor="inputEmail4"
                                  className="form-label"
                                >
                                  Email *
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="inputEmail4"
                                />
                              </div>
                              {/* <!-- Skype --> */}
                              <div className="">
                                <label className="form-label">Skype *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Phone number"
                                />
                              </div>
                            </div>
                            {/* <!-- Row END --> */}
                          </div>
                        </div>
                        {/* <!-- Upload profile --> */}
                        <div style={{ width: "40%" }}>
                          <div className="">
                            <h4 style={{ textAlign: "center" }}>
                              Upload your profile photo
                            </h4>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                rowGap: "3px",
                              }}
                            >
                              <div className="text-center">
                                {/* <!-- Image upload --> */}
                                <img
                                  src=""
                                  alt="profile_image"
                                  style={{
                                    position: "relative",
                                    height: "180px ",
                                    backgroundColor: "lavender",
                                    margin: "0 auto",
                                    border: "none",
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "75%",
                                  }}
                                ></img>

                                {/* <!-- Button --> */}

                                <input
                                  type="file"
                                  style={{
                                    width: "35%",
                                    height: "25px",
                                    // position: "absolute",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Row END --> */}

                      {/* <!-- Social media detail --> */}
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "60%",
                          }}
                        >
                          <div>
                            <h4 style={{ textAlign: "center" }}>
                              Social media detail
                            </h4>
                            <div>
                              {/* <!-- Facebook --> */}
                              <div className="">
                                <label className="form-label">
                                  <i className="fab fa-fw fa-facebook me-2 text-facebook"></i>
                                  Facebook *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Facebook"
                                />
                              </div>
                              {/* <!-- Twitter --> */}
                              <div className="">
                                <label className="form-label">
                                  <i className="fab fa-fw fa-twitter text-twitter me-2"></i>
                                  Twitter *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Twitter"
                                />
                              </div>
                              {/* <!-- Linkedin --> */}
                              <div className="">
                                <label className="form-label">
                                  <i className="fab fa-fw fa-linkedin-in text-linkedin me-2"></i>
                                  Linkedin *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Linkedin"
                                />
                              </div>
                              {/* <!-- Instragram --> */}
                              <div className="">
                                <label className="form-label">
                                  <i className="fab fa-fw fa-instagram text-instagram me-2"></i>
                                  Instagram *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Instragram"
                                />
                              </div>
                              {/* <!-- Dribble --> */}
                              <div className="">
                                <label className="form-label">
                                  <i className="fas fa-fw fa-basketball-ball text-dribbble me-2"></i>
                                  Dribble *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Dribble"
                                />
                              </div>
                              {/* <!-- Pinterest --> */}
                              <div className="">
                                <label className="form-label">
                                  <i className="fab fa-fw fa-pinterest text-pinterest"></i>
                                  Pinterest *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Pinterest"
                                />
                              </div>
                            </div>
                            {/* <!-- Row END --> */}
                          </div>
                        </div>

                        {/* <!-- change password --> */}
                        <div className="col-xxl-6">
                          <h4 style={{ textAlign: "center" }}>
                            Change Password
                          </h4>
                          <div className="bg-secondary-soft px-4 py-5 rounded">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "40%",
                              }}
                            >
                              {/* <!-- Old password --> */}
                              <div className="">
                                <label
                                  htmlFor="exampleInputPassword1"
                                  className="form-label"
                                >
                                  Old password *
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              {/* <!-- New password --> */}
                              <div className="">
                                <label
                                  htmlFor="exampleInputPassword2"
                                  className="form-label"
                                >
                                  New password *
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleInputPassword2"
                                />
                              </div>
                              {/* <!-- Confirm password --> */}
                              <div className="col-md-12">
                                <label
                                  htmlFor="exampleInputPassword3"
                                  className="form-label"
                                >
                                  Confirm Password *
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleInputPassword3"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Row END --> */}
                      {/* <!-- button --> */}
                      <div
                        style={{
                          display: "flex",
                          columnGap: "10px",
                          justifyContent: "center",
                          padding: "20px",
                        }}
                      >
                        <button
                          type="reset"
                          style={{
                            padding: "10px 15px",
                            borderRadius:"25px",
                            backgroundColor: "#3C91E6",
                            border: "none",
                          }}
                        >
                          reset
                        </button>
                        <button
                          type="button"
                          style={{
                            padding: "10px 15px",
                            backgroundColor: "#FD7238",
                            borderRadius:"25px",
                            border: "none",
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </form>
                    {/* <!-- Form END --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default User;
