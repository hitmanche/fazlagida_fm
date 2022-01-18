import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.REACT_APP_API_URL;
axiosInstance.defaults.timeout = 25000;
axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
axiosInstance.defaults.headers.common["Accept"] = "application/json";

axiosInstance.interceptors.request.use(
  function (config) {
    config.url += `&api_key=${process.env.REACT_APP_API_KEY}&format=json`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.data?.error) {
      return Promise.reject(response.data);
    }
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
