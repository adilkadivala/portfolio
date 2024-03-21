import React, { useEffect, useState } from "react";
import Navbar from "../admin/layouts/Navbar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { DeleteModal } from "./layouts/Modals";
import Sidebar from "../admin/layouts/Sidebar";

const UserData = () => {
  const [sidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState([]);
  console.log(userData);
  // getting all data of users in admin panel

  const getAllUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5885/getuserdata");
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // side bar open and close
  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  // dark mode
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  // opening delete modal
  const openDeleteModal = (user_id) => {
    setDeleteModalOpen(true);
    setUserId(user_id);
  };

  // close Delete modal
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setUserId(null);
  };

  // deleting user data
  const deleteUser = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5885/deleteuserdata/${userId}`
      );

      if (response.status === 200) {
        getAllUserData();
        toast.success("Deleted Successful");
        closeDeleteModal();
      } else {
        console.log(`Failed to delete user: ${response.status}`);
        toast.error(`Failed to delete user: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
      closeDeleteModal();
      toast.error(`Failed to delete user: ${error.message}`);
    }
  };

  useEffect(() => {
    getAllUserData();
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
      <DeleteModal
        isDeleteOpen={deleteModalOpen}
        onCloseDelete={closeDeleteModal}
        onDelete={deleteUser}
        itemId={userId}
      />
      <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
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
            <NavLink to="" className="btn-download">
              <i className="bx bxs-cloud-download"></i>
              <span className="text">Download PDF</span>
            </NavLink>
          </div>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Orders</h3>
                <i className="bx bx-search"></i>
                <i className="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Registration Date</th>
                    <th>Status</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user) => {
                    return (
                      <>
                        <tr key={user.user_id}>
                          <td>
                            <img
                              src={require("../../assets/images/image1.png")}
                              alt="user"
                            />
                            <p>{user.firstname}</p>
                          </td>
                          <td>{user.email}</td>
                          <td>
                            {new Date(
                              user.registration_date_time
                            ).toLocaleDateString()}
                          </td>
                          <td>
                            <span className="status completed">Admin</span>
                          </td>
                          <td>
                            <div>
                              <button
                                className="status completed"
                                // onClick={openEditModal}
                                style={{
                                  marginRight: "5px",
                                  width: "40px",
                                  height: "40px",
                                  border: "none",
                                  borderRadius: "15px",
                                  backgroundColor: "#3c91e6",
                                }}
                              >
                                <i
                                  className="fa-solid fa-pen"
                                  style={{
                                    fontSize: "16px",
                                    color: "white",
                                    marginLeft: "-2px",
                                  }}
                                ></i>
                              </button>
                              <button
                                type="button"
                                onClick={() => openDeleteModal(user.user_id)}
                                className="status pending"
                                style={{
                                  marginRight: "5px",
                                  width: "40px",
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
                                    marginLeft: "-2px",
                                  }}
                                ></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default UserData;
