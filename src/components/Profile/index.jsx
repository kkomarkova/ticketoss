import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import UserProfile from "../UserProfile";

const Profile = () => {
  
  const { user: UserLoggedIn } = useSelector((state) => state.auth);

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
