import axios from "axios";
import { DOMAIN, TOKEN } from "../ulti/setting";
export const http = axios.create();
// Add a request interceptor

http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.baseURL = DOMAIN;
    config.headers = {

      TokenCybersoft: TOKEN,
      // Authorization: `Bearer ${TOKEN}`
    //   Authorization: `Bearer ` + localStorage.getItem("accessToken")
      Authorization: `Bearer ` + `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMXN0cmluZzExIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiMTExMTExMTExQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJRdWFuVHJpIiwiMTExMTExMTExQGdtYWlsLmNvbSIsIkdQMDIiXSwibmJmIjoxNjYyOTczMTExLCJleHAiOjE2NjI5NzY3MTF9.Ry63porxPaxgfbf2y2z76xRl0_QvWsFjRIlUTLOd8P4`
    //   'TokenCybersoft': TOKEN,
    //   Authorization: `Bearer ${TOKEN}`
    //   Authorization: `Bearer ` + localStorage.getItem("accessToken") 

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
