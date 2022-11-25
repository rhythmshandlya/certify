import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
