
//Get from cookies
export const getLocalRefreshToken = () => {
    const user = JSON.parse(document.cookie.getItem("user"));
    return user?.refreshToken.token;
  }

export const getLocalAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  }

export const updateLocalAccessToken = (token) => {
    let user = JSON.parse(localStorage.getItem("user"));
    user.token = token;
    localStorage.setItem("user", JSON.stringify(user));
  }

export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  }

export const setUser = (user) =>  {
    console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
  }

export const removeUser = () => {
    localStorage.removeItem("user");
  }

 const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    removeUser
 }; 

export default TokenService;
