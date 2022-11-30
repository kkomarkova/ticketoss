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
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const AllTicketsPage = () => {
const [tickets, setTickets] = useState([]);
const [filteredResults, setFilteredResults] = useState([]);
const [searchInput, setSearchInput] = useState('');

const ticketCategory = [
  {label: "All", value: 0},
  {label: "Sport", value: 1},
  {label: "Music", value: 2},
  {label: "Theatre", value: 3},
  {label: "Concert", value: 4},
]
  
const[selectedOption, setSelectedOption] = useState(ticketCategory[0].value);

  useEffect(() => {
    TicketService.getAllTickets().then((response) => {
      setTickets(response.data);
    });
    }, []);

    const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = tickets.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(tickets)
      }
  }

  const updateSelectedItem = (event) => {
    setTickets([]);
    setSelectedOption(event.target.value);
    
    fetch('https://localhost:7067/api/Ticket/tickets/' + `${ticketCategory[event.target.value].label}`)
      .then((response) => response.json())
      .then((data) => {setTickets(data)})
    




  }

  return (
  <>
    <div className="home-body">
      <img className="home-background-img" src={bgImg} alt="Background"/>
      <h1 >Browse all tickets</h1>
      {/* <p className="col-lg-10 mx-auto">Filter Ticket by Category</p>
      
      <select className="form-select form-select-lg" value={selectedOption} onChange={event => updateSelectedItem(event)}>
        {ticketCategory.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select> */}
      <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
>
      <form>
      <TextField
      id="search-bar"
      className="text"
      onChange={(e) => {
        searchItems(e.target.value);
      }}
      label="Enter a ticket name"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    { <IconButton  aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>}
  </form>
  </Box>
      <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  marginTop={2}
>
<Button variant="contained" component={Link} to="/new-ticket"endIcon={<AddCircleOutlineSharpIcon/>} size="small" className="nav-link"> Add ticket</Button>
</Box>
      
              
      <div className="filter-category">
      </div>
      <div className="home-ticket">
      {searchInput.length > 1 ? (
                    filteredResults.map((ticket) => {
                        return (<Link to={`/tickets/${ticket.id}`}> 
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
                        )})
                ) : (
        tickets.map((ticket) => (
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
        ))
      )}
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
