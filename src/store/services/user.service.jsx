import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:7067/api/User/";

const getAllUser = () => {
  return axios.get(API_URL + "GetAllUsers", { headers: authHeader() });
};

const getUser = () => {
  return axios.get(API_URL + '/{id}', { headers: authHeader() });
};


export default {
  getAllUser,
  getUser,
};
