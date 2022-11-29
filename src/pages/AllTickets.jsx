import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Ticket from "../components/Ticket";
import TicketService from "../store/services/ticket.service";
import Box from "@material-ui/core/Box";
import FilterCategory from "../components/FilterCategory";
import Button from "@mui/material/Button";
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import bgImg from "../images/bgIMG.jpg";
import { Link } from "react-router-dom";

const AllTicketsPage = () => {
const [tickets, setTickets] = useState([]);
  
  useEffect(() => {
    TicketService.getAllTickets().then((response) => {
      setTickets(response.data);
    });
    }, []);

  return (
  <>
    <div className="home-body">
      <img className="home-background-img" src={bgImg} alt="Background"/>
      <h1 >Browse all tickets</h1>
      <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
>
<Button variant="contained"endIcon={<AddCircleOutlineSharpIcon/>} size="small" className="nav-link"> Add ticket</Button>
</Box>
      
              
      <div className="filter-category">
      </div>
      <div className="home-ticket">
        {tickets.map((ticket) => (
          <Link to={`/tickets/${ticket.id}`}> 
            <Ticket 
              key={ticket.id}  
              name={ticket.name}
              location={ticket.location}
              price={ticket.price}
              eventDate={ticket.eventDate}
              creationDate={ticket.creationDate}
              description={ticket.description}
              expirationDate={ticket.expirationDate}
            />
          </Link>
        ))}
        <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
>
          <Pagination 
            itemsCount={10}
            pageSize={2}
            currentPage={1}
            onPageChange={page => console.log(page)}
          />
          </Box>
      </div>
    </div>
    </>
  );
}
export default AllTicketsPage;
