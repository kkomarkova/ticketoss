import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = (props) => {
  
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  } 
  
  return (
    <>
      {currentUser ? 
      (
        <div className="container">
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.email}</strong> Profile
            </h3>
          </header>
          <p>
            <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
            {currentUser.token.substr(currentUser.token.length - 20)}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.loginUser.email}
          </p>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Profile;
