import { axiosPrivate } from "../axios";
import useRefreshToken from "../../hooks/useRefreshToken";

axiosPrivate.interceptors.response.use(
  (res) => res,
  async (err) => {
    const refresh = useRefreshToken();
    if (err.response.status === 401) {
      const tokens = await refresh();
      if (tokens) {
        axiosPrivate.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${tokens?.access?.token}`;
        return axiosPrivate(err.config);
      }
    }
    return err;
  }
);
