import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:7067/api/Ticket/";

const createTicket = () => {
        return axios.post(API_URL + "", { headers: authHeader() });
    };

const getAllTickets = () => {
        return axios.get(API_URL + "GetAllTickets", { headers: authHeader() });
    };

const getTicketLocation = () => {
        return axios.get(API_URL + "tickets/location/{location}", { headers: authHeader() });
    };

const getTicketCategory = () => {
        return axios.get(API_URL + "tickets/{category}", { headers: authHeader() });
    };    

const deleteTicket = () => {
        return axios.get(API_URL + '{id}', { headers: authHeader() });
    };

export default {
    createTicket,
    getAllTickets,
    getTicketLocation,
    getTicketCategory,
    deleteTicket,
};
