import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import api from './api';

api.get("/User/authenticate"+data,{withCredentials:true}).then((res)=>{
  Cookies.set(res.data.access) // assuming the response has the access token

})

// now we check the expiration of access token

useEffect(()=>{
if(!(Cookies.get("access"))){
api.get("/User/refresh-token",{withCredentials:true}).then((res)=>{
Cookies.set(res.data.refreshToken)
})
/*what you do here, is try to have a 
resource/view in your backend that has 
the refresh token and make request to it 
so that it gives you a new access token, 
because refresh token should be in cookies tagged with `httponly', 
then you can send the access token to client side 
as a response and set it somewhere.
*/
}
else{
//do something else
}
},[])


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
    return instance.post("/user/refresh-token", refreshToken );
}  
export const getUser = () => {
    return JSON.parse(localStorage.getItem("accessToken"));
  }

export const setUser = (user) =>  {
    localStorage.setItem("acessToken", JSON.stringify(user));
  }

export const removeUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
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
