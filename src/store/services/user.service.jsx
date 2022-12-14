import api from "./api";
import authHeader from "./auth-header";

const getAllUsers = () => {
  return api.get('/User/GetAllUsers', { headers: authHeader() });
};

const getUser = (id) => {
  return api.get(`/User/${id}`, { headers: authHeader() });
};


const UserService = {
  getAllUsers,
  getUser,
};

export default UserService;
