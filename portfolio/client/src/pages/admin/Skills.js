import React, { useEffect, useState } from "react";
import Navbar from "./layouts/Navbar";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "./layouts/Sidebar";
import { DeleteModal } from "./layouts/Modals";

const Skills = () => {
  const [sidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [isDarkMode, setDarkMode] = useState(false);
  const [editModalOpen, seteditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [skillData, setSkillData] = useState([]);
  const [skillId, setSkillId] = useState(null);

  const [skill, setSkill] = useState({
    skill_icon: null,
    skill_name: "",
    skill_level: "",
    skill_category: "",
  });

  // side bar opening and closing
  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  // side bar opening and closing
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  // opening delete modal
  const openDeleteModal = (skill_id) => {
    setDeleteModalOpen(true);
    setSkillId(skill_id);
  };

  // close Delete modal
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSkillId(null);
  };

  // open Edit modal
  const openEditModal = () => {
    seteditModalOpen(true);
  };

  // Close Edit modal
  const closeEditModal = () => {
    seteditModalOpen(false);
  };

  // handle get skill
  const getAllSkillData = async () => {
    try {
      const response = await axios.get("http://localhost:5885/getskills");
      setSkillData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // handle create skill
  const handleCreateSkill = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("skill_icon", skill.skill_icon);
      formData.append("skill_name", skill.skill_name);
      formData.append("skill_level", skill.skill_level);
      formData.append("skill_category", skill.skill_category);

      const response = await axios.post(
        "http://localhost:5885/postskill",
        formData
      );

      console.log(response);
      const res_data = await response.data;
      console.log(res_data);

      if (response.status === 200) {
        setSkill({
          skill_icon: null,
          skill_name: "",
          skill_level: "",
          skill_category: "",
        });
        toast.success("Skill added successfully");
        getAllSkillData(); // Refresh skill data after successful addition
      } else {
        toast.error("Failed to add skill");
      }
    } catch (error) {
      console.error("Skill Create", error.message);
      toast.error("Failed to add skill");
    }
  };

  // handle delete skill
  const deleteskill = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5885/deleteskills/${skillId}`
      );
      if (response.status === 200) {
        getAllSkillData();
        toast.success("Deleted Successful");
        closeDeleteModal();
      } else {
        console.log(`Failed to delete skill: ${response.status}`);
        toast.error(`Failed to delete skill: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
      closeDeleteModal();
      toast.error(`Failed to delete user: ${error.message}`);
    }
  };

  // handle input
  const handleInput = (e) => {
    if (e.target.name === "skill_icon") {
      setSkill({
        ...skill,
        skill_icon: e.target.files[0],
      });
    } else {
      // Handle regular text inputs
      const { name, value } = e.target;
      setSkill({
        ...skill,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    getAllSkillData();
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
      <DeleteModal
        isDeleteOpen={deleteModalOpen}
        onCloseDelete={closeDeleteModal}
        onDelete={deleteskill}
        itemId={skillId}
      />

      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Skills</h1>
              <ul className="breadcrumb">
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
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
          </div>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>All Skills</h3>
                <i className="bx bx-search"></i>
                <i className="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Icon</th>
                    <th>Skill_name</th>
                    <th>Level</th>
                    <th>Category</th>
                    <th>status</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {skillData.map((skill) => {
                    return (
                      <>
                        <tr key={skill.skill_id}>
                          <td>
                            <img
                              src={`/assets/${skill.skill_icon}`}
                              alt="skill icon"
                            />
                          </td>
                          <td>{skill.skill_name}</td>
                          <td>{skill.skill_level + "%"}</td>
                          <td>{skill.skill_category}</td>
                          <td>
                            <span className="status completed">Online</span>
                          </td>
                          <td>
                            <button
                              className="status completed"
                              onClick={openEditModal}
                              style={{
                                marginRight: "5px",
                                width: "40px",
                                height: "40px",
                                border: "none",
                                cursor: "pointer",
                                borderRadius: "15px",
                                backgroundColor: "#3c91e6",
                              }}
                            >
                              <i
                                className="fa-solid fa-pen"
                                style={{
                                  fontSize: "16px",
                                  color: "white",
                                  marginLeft: "-3px",
                                }}
                              ></i>
                            </button>
                            <button
                              type="button"
                              onClick={() => openDeleteModal(skill.skill_id)}
                              className="status pending"
                              style={{
                                marginRight: "5px",
                                width: "40px",
                                cursor: "pointer",
                                height: "40px",
                                border: "none",
                                borderRadius: "15px",
                                backgroundColor: "#fd7238",
                              }}
                            >
                              <i
                                className="fa-solid fa-trash"
                                style={{
                                  fontSize: "16px",
                                  color: "white",
                                  marginLeft: "-3px",
                                }}
                              ></i>
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Create skill</h3>
                <i className="bx bx-plus"></i>
                <i className="bx bx-filter"></i>
              </div>
              <div>
                <form
                  method="post"
                  encType="multipart/form-data"
                  name="add form"
                  onSubmit={handleCreateSkill}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                  }}
                >
                  <div className="mb-3">
                    <label htmlFor="skill_icon" className="form-label">
                      Skill Icon
                    </label>
                    <input
                      type="file"
                      onChange={handleInput}
                      id="skill_icon"
                      name="skill_icon"
                      placeholder="image Here"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="skill_name" className="form-label">
                      Skill_name
                    </label>
                    <input
                      style={{ padding: "12px 5px", fontSize: "15px" }}
                      type="text"
                      className="form-control"
                      value={skill.skill_name}
                      id="skill_name"
                      name="skill_name"
                      onChange={handleInput}
                      placeholder="Enter Skill name Here"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="skill_level" className="form-label">
                      Level:
                    </label>
                    <input
                      style={{ padding: "12px 5px", fontSize: "15px" }}
                      className="form-control"
                      type="number"
                      value={skill.skill_level}
                      id="skill_level"
                      onChange={handleInput}
                      name="skill_level"
                      placeholder="Skill level"
                    ></input>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="skill_category" className="form-label">
                      Skill Category:
                    </label>
                    <input
                      style={{ padding: "12px 5px", fontSize: "15px" }}
                      className="form-control"
                      type="text"
                      value={skill.skill_category}
                      id="skill_category"
                      onChange={handleInput}
                      name="skill_category"
                      placeholder=" Skill Category"
                    ></input>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <button
                      type="reset"
                      style={{
                        backgroundColor: "#3c91e6",
                        border: "none",
                        color: "#FFF",
                        marginRight: "5px",
                        padding: "7px 10px",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#db504a",
                        border: "none",
                        color: "#FFF",
                        cursor: "pointer",
                        marginLeft: "5px",
                        padding: "7px 10px",
                        borderRadius: "5px",
                      }}
                      // onClick={handleCreateSkill}
                    >
                      Publish
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* edit modal */}
      <div
        style={{
          display: editModalOpen ? "block" : "none",
          zIndex: "1",
          fontSize: "15px",
          padding: "25px",
          position: "fixed",
          top: "135px",
          backgroundColor: "#f9f9f9",
          border: "1px solid #000",
          fontWeight: "bolder",
          borderRadius: "5px",
          overflow: "hidden",
          left: "480px",
          width: "35%",
          height: "auto",
        }}
      >
        <div
          style={{
            display: "block",
            fontSize: "15px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div>
              <button
                type="button"
                style={{
                  backgroundColor: "#db504a",
                  color: "#fff",
                  border: "none",
                  position: "absolute",
                  top: "0",
                  cursor: "pointer",
                  padding: "7px 10px",
                  right: "0",
                }}
                onClick={closeEditModal}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body mt-4 mb-2 mx-3 p-0">
              <p className="modal-title fs-5 w-50" id="Add modal">
                Add book
              </p>
              <br />
              <form
                method="post"
                encType="multipart/form-data"
                name="edit form"
                // onSubmit={handlesubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    image:
                  </label>
                  <input
                    type="file"
                    // value={addBook.image}
                    // onChange={handleChange}
                    id="image"
                    name="image"
                    placeholder="image Here"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Book Title" className="form-label">
                    Skill_name
                  </label>
                  <input
                    style={{ padding: "12px 5px", fontSize: "15px" }}
                    type="text"
                    className="form-control"
                    // value={addBook.book_title}
                    id="Book Title"
                    name="book_title"
                    // onChange={handleChange}
                    placeholder="Enter Skill name Here"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Price" className="form-label">
                    Level:
                  </label>
                  <input
                    style={{ padding: "12px 5px", fontSize: "15px" }}
                    className="form-control"
                    type="number"
                    // value={addBook.price}
                    id="Price"
                    // onChange={handleChange}
                    name="price"
                    placeholder="Skill level"
                  ></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="Book Category" className="form-label">
                    Skill Category:
                  </label>
                  <input
                    style={{ padding: "12px 5px", fontSize: "15px" }}
                    className="form-control"
                    type="text"
                    // value={addBook.select_book_category}
                    id="Book Category"
                    // onChange={handleChange}
                    name="select_book_category"
                    placeholder=" Skill Category"
                  ></input>
                </div>
              </form>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <button
                type="button"
                style={{
                  backgroundColor: "#3c91e6",
                  border: "none",
                  color: "#FFF",
                  marginRight: "5px",
                  padding: "7px 10px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
                onClick={closeEditModal}
              >
                CANCEL
              </button>
              <button
                type="submit"
                style={{
                  backgroundColor: "#db504a",
                  border: "none",
                  color: "#FFF",
                  cursor: "pointer",
                  marginLeft: "5px",
                  padding: "7px 10px",
                  borderRadius: "5px",
                }}
                // onClick={handlesubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* edit modal */}
    </>
  );
};

export default Skills;
