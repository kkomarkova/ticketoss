import api from "./api";
import TokenService from "./token.service";


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
                TokenService.setUser(response.data.token);    
            }
               
    return response.data;
}

const logout = () => {
        TokenService.removeUser();
    }
 
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('accessToken'));;
}
    
const AuthService = {
        register,
        login,
        logout,
        getCurrentUser
    };

export default AuthService;  