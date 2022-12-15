import { 
    CREATE_TICKET_SUCCESS, 
    CREATE_TICKET_FAIL,
    GET_ALL_TICKETS, 
    GET_TICKET,
    GET_TICKET_LOCATION, 
    GET_TICKET_CATEGORY,
    SET_RESPONSE,
    GET_TICKET_BY_USER_ID
} from './types';

import TicketService from '../services/ticket.service';

export const createTicket = (
    userId,
    name,
    description,
    price,
    eventDate,
    location,
    category,
    number
    ) => (dispatch) => {
    return TicketService.createTicket(
        userId,
        name,
        description,
        price,
        eventDate,
        location,
        category,
        number
        ).then(
        (response) => {
            dispatch({
                type: CREATE_TICKET_SUCCESS,
            });

            dispatch({
                type: SET_RESPONSE,
                payload: response.data,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

                dispatch({
                    type: CREATE_TICKET_FAIL,
                });

                dispatch({
                    type: SET_RESPONSE,
                    payload: message,
                });

            return Promise.reject();
        }
    );
};

export const getAllTickets = () => (dispatch) => {
    return TicketService.getAllTickets().then(
        (response) => {
            dispatch({
                type: GET_ALL_TICKETS,
                payload: response.data 
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
                
            dispatch({
                type: SET_RESPONSE,
                payload: message,
            });
            
            return Promise.reject();
        }
    );
}

export const getTicket = (id) => (dispatch) => {
    return TicketService.getTicket(id).then(
        (response) => {
            dispatch({
                type: GET_TICKET,
                payload: { ticket: response.data }
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
                 
            dispatch({
                type: SET_RESPONSE,
                payload: message,
            });
            return Promise.reject();
        }
    );
}

export const getTicketLocation = () => (dispatch) => {
    return TicketService.getTicketLocation().then(
        (response) => {
            dispatch({
                type: GET_TICKET_LOCATION,
                payload: { ticket: response.data }
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            
            dispatch({
                type: SET_RESPONSE,
                payload: message,
            });
            return Promise.reject();
        }
    );
}

export const getTicketCategory = () => (dispatch) => {
    return TicketService.getTicketCategory().then(
        (response) => {
            dispatch({
                type: GET_TICKET_CATEGORY,
                payload: { ticket: response.data }
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
                
            dispatch({
                type: SET_RESPONSE,
                payload: message,
            });
            return Promise.reject();
        }
    );
}

export const getTicketByUserId = () => (dispatch) => {
    return TicketService.getTicketByUserId().then(
        (response) => {
            dispatch({
                type: GET_TICKET_BY_USER_ID,
                payload: { ticket: response.data }
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

                dispatch({
                    type: SET_RESPONSE,
                    payload: message,
                });

                return Promise.reject
        }
    );
}



const ticketActions = {
    createTicket,
    getAllTickets,
    getTicket,
    getTicketLocation,
    getTicketCategory,
    getTicketByUserId
}

export default ticketActions;