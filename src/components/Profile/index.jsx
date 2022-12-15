import React, { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import UserProfile from "../UserProfile";
import UserService from "../../store/services/user.service";
import PaymentService from '../../store/services/payment.service';
import TicketService from '../../store/services/ticket.service';
import Ticket from "../Ticket";

const Profile = () => {
  
  const { user: currentUser } = useSelector((state) => state.auth);
  const [payments, setPayments] = useState([]);
  const [tickets, setTickets] = useState([]);
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

  useEffect(() => {
    TicketService.getTicketByUserId(userId)
      .then((response) => {
        setTickets(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }, []);
  console.log(tickets);

  if (!currentUser) {
    return <Navigate to="/login" />;
  } 
  else if (currentUser && currentUser.role === "admin") {
    return <Navigate to="/admin" />;
  }
  
  return (
    <>
    {loading ? (
      <div>Loading...</div>
    ) : (
      <>
      {userData.map((user) => (
          <UserProfile
            key={user.id}
            Name={user.firstName + " " + user.lastName}
            Token={currentUser}
            Email={user.email}
            Phone={user.phoneNumber}
            Tickets={payments.map((payment) => (
              <div key={payment.orderId}>
                <p>Order Id</p>
                <p>{payment.orderId}</p>
                  {payment.tickets.map((ticket)=>{
                  return <Ticket key={ticket.id}
                  name= {ticket.name}
                  description={ticket.description}                
                  eventDate= {ticket.eventDate}
                  price={ticket.price}
                  />
                })}
              </div>  
            ))}
            SoldTickets={tickets.map((ticket) => (
              <div className="sold-tickets" key={ticket.id}>
                <p>Ticket Id:</p>
                <p className="sold-ticket-text">{ticket.id}</p>
                <p>Title:</p>
                <p className="sold-ticket-text">{ticket.name}</p>
                <p>Price:</p>
                <p className="sold-ticket-text">{ticket.price}</p>
                <p>Event date:</p>
                <p className="sold-ticket-text">{ticket.eventDate}</p>
              </div>
            ))}
          />
      ))}
      </>
    )}
  </>
  );
};

export default Profile;
