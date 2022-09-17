import axios from "axios";
import { DOMAIN, TOKEN } from "../ulti/setting";
export const http = axios.create();

http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.baseURL = DOMAIN;
    config.headers = {
      TokenCybersoft: TOKEN,
      Authorization: `Bearer ` + localStorage.getItem("accessToken"),
    };
    return { ...config };
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data.content) {
      return response.data.content;
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);
