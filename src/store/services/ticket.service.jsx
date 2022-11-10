import api from "./api";

const createTicket = () => {
        return api.post("/Ticket");
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
