import axios from "axios";
import { toast } from "react-toastify";
import logService from "./logService";

//set default baseURL so when we use http request this will be add in front
//example: http.get("/users") will be http.get("http://localhost:3900/api/users") in development env
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

//set x-auth-token headers
function setJwtHeaders(jwt) {
  if (jwt) axios.defaults.headers.common["x-token"] = jwt;
}

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("INTERCEPTOR CALLED");

    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      console.log("Logging the error", error);
      logService.log(error);
      toast.error("unexpected error occured.");
    }
    return Promise.reject(error);
  }
);

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwtHeaders,
};

export default httpService;