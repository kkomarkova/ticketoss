import api from "./api";

/**
 * 
 * @returns 
 * 
 * "name": "Denmark vs France",
  "description": "World Cup 2022 in Qatar",
  "price": "$1000",
  "eventDate": "2022-11-10T22:32:24.515Z",
  "location": "Qatar",
  "category": "Football",
  "number": "123456788"
 */
const createTicket = (
    Name,
    Description,
    Price,
    EventDate,
    Location,
    Category,
    Number
    ) => {
    return api.post("/Ticket", {
        Name,
        Description,
        Price,
        EventDate,
        Location,
        Category,
        Number
    });
};

const getAllTickets = () => {
        return api.get("/Ticket/GetAllTickets");
    };

const getTicketLocation = () => {
        return api.get("/Ticket/tickets/location/{location}");
    };

const getTicketCategory = () => {
        return api.get("/Ticket/tickets/{category}");
    };    

const deleteTicket = () => {
        return api.get('/Ticket/{id}');
    };

const TicketService = {
    createTicket,
    getAllTickets,
    getTicketLocation,
    getTicketCategory,
    deleteTicket,
};

export default TicketService;
