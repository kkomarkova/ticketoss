import React, { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import UserProfile from "../UserProfile";
import TokenService from "../../store/services/token.service";

const Profile = () => {
  
  const { user: UserLoggedIn } = useSelector((state) => state.auth);
//TODO: 
//Add a check to see if the user is logged in or not. 
//If not, redirect to login page. 
//If yes, show profile page and get access token from local storage.
  useEffect(() => {
    if (UserLoggedIn) {
      TokenService.getLocalAccessToken()
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  if (!UserLoggedIn) {
    return <Navigate to="/login" />;
  } 
  return (
    <>
      {UserLoggedIn ? 
      (
        <>
          <UserProfile
              Email={UserLoggedIn.loginUser.email}
              Name={UserLoggedIn.firstName + " " + UserLoggedIn.lastName}
              Phone={UserLoggedIn.phoneNumber}
              Token={UserLoggedIn.token}
            />
        </> 
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Profile;
