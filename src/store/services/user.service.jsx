import api from "./api";

const getAllUsers = () => {
  return api.get('/User/GetAllUsers');
};

const getUser = () => {
  return api.get('/User/{id}');
};


const UserService = {
  getAllUsers,
  getUser,
};

export default UserService;
