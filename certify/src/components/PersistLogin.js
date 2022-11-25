import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { Player } from "@lottiefiles/react-lottie-player";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      const response = await refresh();
      console.log(response);
      if (!response) {
        setAuth({ isAuthenticated: false });
      } else {
        setAuth({ ...response, isAuthenticated: true });
        setIsLoading(false);
      }
    };
    !auth.isAuthenticated ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          {" "}
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_x62chJ.json"
            style={{ height: "800px", width: "800px" }}
          ></Player>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
