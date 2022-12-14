import api from "./api";
import jwtDecode from "jwt-decode";


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
            const token = response.data.token;
                localStorage.setItem("accessToken", JSON.stringify(token)); 
                
            } 
    return response.data;
}

const logout = () => {
        
    localStorage.removeItem("accessToken");
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