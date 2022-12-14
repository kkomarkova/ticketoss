import api from "./api";
import jwtDecode from "jwt-decode";
import axios from "axios";


const register = (
    FirstName, 
    LastName, 
    Email, 
    Password, 
    PhoneNumber
    ) => {
    return api.post("user/register", {
        FirstName,
        LastName,
        Email,
        Password,
        PhoneNumber,
    });
};

const login = async (
    Email, 
    Password
    ) => {
        const response = await api
        .post("user/authenticate", {
            Email,
            Password,
        })
        if (response.data.token) {
                localStorage.setItem("accessToken", JSON.stringify(user)); 
                
            } 
    return response.data;
}

const logout = () => {
        TokenService.removeUser();
    }
 
const getCurrentUser = () => {
    const jwt = localStorage.getItem("accessToken");
  if (jwt === "undefined") return null;
  return jwt ? jwtDecode(jwt) : null; //decodes the jwt payload
}
    
const AuthService = {
        register,
        login,
        logout,
        getCurrentUser
    };

export default AuthService;  