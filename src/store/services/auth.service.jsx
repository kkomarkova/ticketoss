import axios from "axios";

const API_URL = "https://localhost:7067/api/User/";

const register = (
    FirstName, 
    LastName, 
    Email, 
    Password, 
    PhoneNumber
    ) => {
    return axios.post(API_URL + "register", {
        FirstName,
        LastName,
        Email,
        Password,
        PhoneNumber,
    });
};

const login = async (Email, Password) => {
        const response = await axios
        .post(API_URL + "authenticate", {
            Email,
            Password,
        });
    if (response.data.token) {
        localStorage.setItem("AccessToken", JSON.stringify(response.data.token));
    }
    return response.data;
}

const logout = () => {
        localStorage.removeItem("user");
    }
 
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));;
}
    
export default {
        register,
        login,
        logout,
        getCurrentUser
    };