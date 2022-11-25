import axios from "axios";

const BASE_URL = "http://localhost:8000/v1";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json, text/plain, /",
  },
  withCredentials: false,
});

export const axiosIgnoreInterceptor = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json, text/plain, /",
  },
  withCredentials: false,
});
