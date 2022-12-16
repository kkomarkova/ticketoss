import { ConstructionOutlined } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "../pages/pages.css";
import EmailService from "../store/services/email.service";

const Confirmation = () => {
  const [order, setOrder] = useState([]);
  //generating random order id
  const randomId = Math.floor(Math.random() * 1000000000);
  //getting userinformation from local storage
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem("cartItem"));
    setOrder(cartItem);
  }, []);

  useEffect(() => {
    EmailService.sendEmail(
      userInfo[0].email,
      "Order Confirmation",
      `Thank you for your purchase! Your order ID is ${randomId+order.id}`
    ).then((response) => {
      if(response.status === 200){
        console.log("Email sent successfully");
      }else{
        console.log("Email failed to send");
      }
    }
    );
  }, []);
  return (  
    <>
      <div className="confirmation-page">
        <h2>Your order has been recevied!</h2>
        <div className="circle">
            <div className="checkmark"></div>
        </div>
        <h3>Thank you for your purchase !</h3>
        <h4>Your order ID is : {randomId+order.id}</h4>
           
      </div>
    </>
  );
}
export default Confirmation;