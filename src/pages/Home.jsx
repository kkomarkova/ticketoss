import React from "react";
import {useNavigate} from 'react-router-dom';
//import Home from "../components/Home";
import bgImg from "../images/party.jpg";

import Ticket from "../components/Ticket";
import "../pages/pages.css";
import Pagination from "../components/Pagination";



const HomePage = () => {

  const navigate = useNavigate();
  const navigateTicket = () => {
    navigate('/Ticket');
  };

  return (
    <>
    <div className="home-body">
      <img className="home-background-img" src={bgImg} alt="Background"/>
      <h1 >Browse all tickets</h1>
          <Pagination />
    </div>
    </>
  );
}

export default HomePage;
