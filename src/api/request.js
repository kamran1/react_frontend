import axios from "axios";
import { Alert } from 'reactstrap';

// By Kamran Majeed

// create an axios instance
const service = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 50000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response;

    // if the custom code is not 200, it is judged as an error.
    console.log(res.status);
    if (res.status != "200") {
    console.log(res);
      return Promise.reject(new Error(res.data || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log(error.response);
    alert(error.response.data.message+'\n'+error.response.data.details);
    return Promise.reject(error.response);
  }
);

export default service;

// By Kamran Majeed
