import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios, { axiosPrivate } from "../../api/axios";
import { BsArrowLeftCircle } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import { SiFuturelearn } from "react-icons/si";
import { SiOpenaccess } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import Logo from "../extra/CertifyLogo";
import useAuth from "../../hooks/useAuth";
import { Player } from "@lottiefiles/react-lottie-player";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const Menus = [
    { title: "Dashboard", path: "/", src: <AiFillPieChart /> },
    { title: "Profile", path: "/profile", src: <CgProfile /> },
    {
      title: "Certificate Editor",
      path: "/create",
      src: <SiOpenaccess />,
    },
  ];

  return (
    <>
      <div
        className={`${
          open ? "w-96" : "w-fit"
        }  hidden sm:block fixed h-screen z-[500] bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-[25px] dark:bg-slate-800`}
      >
        <BsArrowLeftCircle
          className={`${!open &&
            "rotate-180"} absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        />
        <Link to="/">
          <div className={`flex ${open && "gap-x-4"} items-center`}>
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/private_files/lf30_XAX6ye.json"
              style={{ height: "50px", width: "50px", padding: "5px" }}
            ></Player>
            {open && (
              <span className="text-xl font-medium whitespace-nowrap dark:text-white">
                {auth?.user?.name}
              </span>
            )}
          </div>
        </Link>

        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${location.pathname ===
                  menu.path && "bg-gray-200 dark:bg-gray-700"}`}
              >
                <span className="text-2xl">{menu.src}</span>
                <span
                  className={`${!open &&
                    "hidden"} origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
          <li
            className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        mt-9 `}
          >
            <div
              className="flex"
              onClick={async () => {
                try {
                  await axios.post("auth/logout", {
                    refreshToken: auth.tokens.refresh.token,
                  });
                  navigate("/login");
                } catch (e) {
                  console.log(e);
                  navigate("/login");
                }
              }}
            >
              <span className="text-2xl">
                <BiLogOut />
              </span>
              <span
                className={`${!open &&
                  "hidden"} origin-left duration-300 hover:block ml-6`}
              >
                Logout
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
