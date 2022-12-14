import React, { useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import UserProfile from "../UserProfile";

const Profile = () => {
  
  const { user: currentUser } = useSelector((state) => state.auth);
  //TODO: 
  //Add a check to see if the user is logged in or not. 
  //If not, redirect to login page. 
  //If yes, show profile page and get access token from local storage.

  if (!currentUser) {
    return <Navigate to="/login" />;
  } 
  return (
    <>
       <UserProfile
        Name="myName"
        Email="myEmail"
        Phone="myPhone"
        Token={currentUser}
      />  
    </>
  );
};

export default Profile;
