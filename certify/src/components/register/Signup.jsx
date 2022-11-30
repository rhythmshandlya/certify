import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useNavigate } from "react-router-dom";
import api, { axiosPrivate } from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { setAuth } = useAuth();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", data);
      console.log(res.data);
      setAuth({ ...res?.data, isAuthenticated: true });
      localStorage.setItem("refresh", res?.data?.tokens?.refresh?.token);
      axiosPrivate.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res?.data?.tokens?.access?.token}`;
      navigate("/dashboard");
    } catch (e) {
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="mt-16 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2
              className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                xl:text-bold"
            >
              Sign Up
            </h2>
            <div className="mt-12">
              <form>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Organization Name
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder="IEEE Students Branch"
                    value={data.name}
                    onChange={(e) => {
                      setData({ ...data, name: e.target.value });
                    }}
                  />
                </div>
                <div className="mt-8">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder="ieeesbjiit@gmail.com"
                    value={data.email}
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                    <div>
                      {/*Replace This With A Link Tag! */}
                      <p
                        className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                    cursor-pointer"
                      >
                        Forgot Password?
                      </p>
                    </div>
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password"
                    placeholder="Enter your password"
                    value={data.password}
                    onChange={(e) => {
                      setData({ ...data, password: e.target.value });
                    }}
                  />
                </div>
                <div className="flex justify-around m-10">
                  <div className="cursor-pointer">
                    <Player
                      autoplay
                      loop
                      src="https://assets3.lottiefiles.com/packages/lf20_qct0ydor.json"
                      style={{
                        height: "100px",
                        width: "100px",
                      }}
                    ></Player>
                    <p
                      onClick={(e) => {
                        setData({ ...data, role: "organization" });
                        e.target.innerHTML = "✔️";
                      }}
                      className="text-center"
                    >
                      Organization
                    </p>
                  </div>
                  <div className="cursor-pointer text-center">
                    <Player
                      autoplay
                      loop
                      src="https://assets10.lottiefiles.com/packages/lf20_b7t4ylgj.json"
                      style={{ height: "100px", width: "100px" }}
                    ></Player>
                    <p
                      onClick={(e) => {
                        setData({ ...data, role: "student" });
                        e.target.innerHTML = "✔️";
                      }}
                      className="text-center"
                    >
                      Student
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                            shadow-lg"
                    onClick={handleRegister}
                  >
                    Sing up
                  </button>
                </div>
              </form>
              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ?{" "}
                <Link to="/login">
                  <span className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                    Login
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_hy4txm7l.json"
            style={{ height: "800px", width: "800px" }}
          ></Player>
        </div>
      </div>
    </>
  );
};

export default SignUp;
