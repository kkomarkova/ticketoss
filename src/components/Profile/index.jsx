import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import UserProfile from "../UserProfile";
import NewTicket from "../NewTicket";

const Profile = () => {
  
  const { user: currentUserLogin } = useSelector((state) => state.auth);
  const { user: currentUser } = useSelector((state) => state.user);

  if (!currentUserLogin) {
    return <Navigate to="/login" />;
  } 
  
  return (
    <>
      {currentUserLogin ? 
      (
        <>
          <UserProfile
              Email={currentUserLogin.loginUser.email}
              Token={currentUserLogin.token}
            />
          {/* <NewTicket /> */}
        </> 
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Profile;
