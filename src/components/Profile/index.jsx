import React, { useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import UserProfile from "../UserProfile";

const Profile = () => {
  
  const { user: currentUser } = useSelector((state) => state.user);
  //TODO: 
  //Add a check to see if the user is logged in or not. 
  //If not, redirect to login page. 
  //If yes, show profile page and get access token from local storage.
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken")) {
  //     console.log("User is logged in");
  //   }
  // }, []);

  if (!currentUser) {
    return <Navigate to="/login" />;
  } 
  return (
    <>
      <UserProfile
        Email={currentUser.loginUser.email}
        Name={currentUser.firstName + " " + currentUser.lastName}
        Phone={currentUser.phoneNumber}
        Token={currentUser.token}
      /> 
    </>
  );
};

export default Profile;
