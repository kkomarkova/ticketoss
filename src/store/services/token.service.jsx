import api from './api';

export const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem("refreshToken"));
    return user?.refreshToken.token;
  }

export const getLocalAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("accessToken"));
    return user?.token;
  }

export const updateLocalAccessToken = (token) => {
    let user = JSON.parse(localStorage.getItem("accessToken"));
    user.token = token;
    localStorage.setItem("accessToken", JSON.stringify(user));
  }

export const refreshToken = () => {
    const refreshToken = getLocalRefreshToken();
    return api.post("/user/refresh-token", refreshToken );
}  
export const getUser = () => {
    return JSON.parse(localStorage.getItem("accessToken"));
  }

export const setUser = (user) =>  {
    localStorage.setItem("acessToken", JSON.stringify(user));
  }

export const removeUser = () => {
    localStorage.clear();
  }

 const TokenService = {
    refreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    removeUser
 }; 

export default TokenService;
