import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import UserProfile from "../UserProfile";

const Profile = () => {
  
  const { user: UserLoggedIn } = useSelector((state) => state.auth);
  //TODO: 
  //Add a check to see if the user is logged in or not. 
  //If not, redirect to login page. 
  //If yes, show profile page and get access token from local storage.
  
  if (!UserLoggedIn) {
    return <Navigate to="/login" />;
  } 
  return (
    <>
      <UserProfile
        Email={UserLoggedIn.loginUser.email}
        Name={UserLoggedIn.firstName + " " + UserLoggedIn.lastName}
        Phone={UserLoggedIn.phoneNumber}
        Token={UserLoggedIn.token}
      /> 
    </>
  );
};

export default Profile;
