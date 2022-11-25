import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Nav";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-auto">
        <Sidebar />
        <div className="ml-24"></div>
        <div className="grow">
          <Navbar />
          <div className="m-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
