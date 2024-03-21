import React from "react";
import { Routes, Route } from "react-router-dom";
// admin routes
import Dashboard from "../pages/admin/Dashboard";
import Skills from "../pages/admin/Skills";
import User from "../pages/admin/User";
import UserData from "../pages/admin/UserData";

// public routes
import Index from "../pages/client/home/Index";
import IndexAbout from "../pages/client/about/IndexAbout";
import BlogIndex from "../pages/client/blogs/BlogIndex";
import IndexContact from "../pages/client/contact/IndexContact";
import IndexExprience from "../pages/client/expriences/IndexExprience";
import IndexService from "../pages/client/services/IndexService";
import IndexWorks from "../pages/client/works/IndexWorks";

// auth
import Login from "../pages/auth/Login";
// import Logout from "../pages/auth/Logout";
import Signup from "../pages/auth/Signup";

const Public = () => {
  return (
    <>
      <Routes>
        {/* adminDashboard */}
        <Route
          exact
          path="/dashboard"
          element={
            <>
              <Dashboard />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <Skills />
            </>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <>
              <User />
            </>
          }
        ></Route>
        <Route
          path="/userdata"
          element={
            <>
              <UserData />
            </>
          }
        ></Route>
        {/* public */}
        <Route
          exact
          path="/"
          element={
            <>
              <Index />
            </>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <>
              <IndexAbout />
            </>
          }
        />
        <Route
          exact
          path="/blog"
          element={
            <>
              <BlogIndex />
            </>
          }
        />
        <Route
          exact
          path="/contact"
          element={
            <>
              <IndexContact />
            </>
          }
        />
        <Route
          exact
          path="/exprience"
          element={
            <>
              <IndexExprience />
            </>
          }
        />
        <Route
          exact
          path="/service"
          element={
            <>
              <IndexService />
            </>
          }
        />
        <Route
          exact
          path="/works"
          element={
            <>
              <IndexWorks />
            </>
          }
        />

        {/* auth */}
        <Route
          exact
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        {/* <Route
          exact
          path="/logout"
          element={
            <>
              <Logout />
            </>
          }
        /> */}
        <Route
          exact
          path="/signup"
          element={
            <>
              <Signup />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Public;
