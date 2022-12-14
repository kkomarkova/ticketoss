import React, { useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import UserProfile from "../UserProfile";
import UserService from "../../store/services/user.service";

const Profile = () => {
  
  const { user: currentUser } = useSelector((state) => state.auth);

  //Get user id from local storage to use in the getUser function
  const userId = localStorage.getItem("userId");
  //userinfo array to store user data
  const userInfo = [];
  useEffect(() => {
    UserService.getUser(userId).then((response) => {
      userInfo.push(response.data);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    });
    }, []);
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  } 
  return (
    <>
       <UserProfile
          Name={userData[0].firstName + " " + userData[0].lastName}
          Token={userId}
          Email={userData[0].email}
          Phone={userData[0].phoneNumber}
      />  
    </>
  );
};

export default Profile;
