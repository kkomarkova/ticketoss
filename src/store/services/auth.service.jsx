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
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
    }

const logout = () => {
        localStorage.removeItem("user");
    }
    
    export default {
        register,
        login,
        logout,
    };