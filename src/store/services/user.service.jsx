import api from "./api";

//const API_URL = "https://localhost:7067/api/User/";

const getAllUsers = () => {
  return api.get("user/GetAllUsers");
};

const getUser = () => {
  return api.get('user/{id}');
};


const UserService = {
  getAllUsers,
  getUser,
};

export default UserService;
