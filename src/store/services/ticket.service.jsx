import api from "./api";

const createTicket = (
    UserId,
    Name,
    Description,
    Price,
    EventDate,
    Location,
    Category,
    Number
    ) => {
    return api.post("/Ticket", {
        UserId,
        Name,
        Description,
        Price,
        EventDate,
        Location,
        Category,
        Number
    });
};

const getAllTickets = (params) => {
        return api.get("/Ticket/GetAllTickets", { params });
    };
const getTicket = (id) => {
    return api.get(`/Ticket/${id}`);
};
const getTicketLocation = (location) => {
        return api.get(`/Ticket/tickets/location/${location}`);
    };

const getTicketCategory = (category) => {
        return api.get(`/Ticket/tickets/${category}`);
    };    

const deleteTicket = (id) => {
        return api.get(`/Ticket/${id}`);
};

const TicketService = {
    createTicket,
    getAllTickets,
    getTicket,
    getTicketLocation,
    getTicketCategory,
    deleteTicket,
};

export default TicketService;
