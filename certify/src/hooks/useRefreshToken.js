import { axiosPrivate } from "../api/axios.js";

const useRefreshToken = () => {
  const refresh = async () => {
    try {
      if (
        !localStorage.getItem("refresh") ||
        localStorage.getItem("refresh") === "undefined"
      ) {
        return null;
      }
      const response = await axiosPrivate.post("/auth/refresh-tokens", {
        refreshToken: localStorage.getItem("refresh"),
      });
      console.log("useRefreshToken", response.data);
      localStorage.setItem("refresh", response?.data?.tokens?.refresh?.token);

      axiosPrivate.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response?.data?.tokens?.access?.token}`;

      return response?.data;
    } catch (err) {
      return null;
    }
  };
  return refresh;
};

export default useRefreshToken;
