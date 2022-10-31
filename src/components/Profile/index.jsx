import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { logout } from "../../store/actions/auth";

const Profile = (props) => {
  
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout())
      .then(() => {
        props.history.push("/");
        window.location.reload();
    });
  };

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
          <button onClick={handleLogOut}>Logout</button>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Profile;
