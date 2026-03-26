import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;

const config = {
  baseURL: baseURL,
  timeout: 3000000,
};
const api = axios.create(config);
api.defaults.baseURL = baseURL;
const handleBefore = (config) => {
  const token = localStorage.getItem("token")?.replaceAll('"', "");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
};
const handleError = (error) => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, handleError);
// api.interceptors.response.use(null, handleError);

export default api;