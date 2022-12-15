import React, { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import UserProfile from "../UserProfile";
import UserService from "../../store/services/user.service";
import PaymentService from '../../store/services/payment.service';

const Profile = () => {
  
  const { user: currentUser } = useSelector((state) => state.auth);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  //Get user id from local storage to use in the getUser function
  const userId = localStorage.getItem("userId");
  //userinfo array to store user data
  const userInfo = [];

  UserService.getUser(userId)
    .then((response) => { 
      userInfo.push(response.data);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    })
    .catch((error) => {
      console.log("Error: "+error);
    });
  
  //Get user data from local storage
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  
  //get user id from local storage to use in the getOrderByUserId action
  useEffect(() => {
    PaymentService.getOrderByUserId(userId)
      .then((response) => {
        setPayments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }, []);
  console.log(payments);

  if (!currentUser) {
    return <Navigate to="/login" />;
  } 
  else if (currentUser && currentUser.role === "admin") {
    return <Navigate to="/admin" />;
  }
  return (
    <>
      {userData.map((user) => (
        <>
          <UserProfile
            key={user.id}
            Name={user.firstName + " " + user.lastName}
            Token={currentUser}
            Email={user.email}
            Phone={user.phoneNumber}
          />
        </>
      ))}
    </>
  );
};

export default Profile;
