import React, { useState, useEffect } from "react";
import PaymentService from "../../store/services/payment.service";
import UserProfile from "../UserProfile";

const Home = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  //get user id from local storage to use in the getUser function
  const userId = localStorage.getItem("userId");
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
    
  //An array of numbers to use number as key
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <>
       <div style={{textAlign:"center", margin:"10% 20%"}}>
        home test page
        {loading ? (
          <div>Loading...</div>
        ) : (
            <UserProfile 
              key="8" 
              Token="34567iobcugvebudiheelne"
              Tickets={payments.map(({orderId, tickets, price, buyerId}) => (
                <div key={orderId}>
                  <p>Order Id</p>
                  <p>{orderId}</p>
                  <p>Buy id</p>
                  <p>{buyerId}</p>
                  <p>Price</p>
                  <p>{price}</p>
                  <p>Ticket Name</p>
                  <p>{tickets.map((ticket)=>{
                    return <p key={ticket.id}>{ticket.name}</p>
                  })}</p>
                </div>
            ))}
            />
         
        )}
       </div>
       
      
    </>
  );
}

export default Home;
