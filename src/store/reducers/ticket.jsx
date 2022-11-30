import {
    GET_TICKET,
    GET_ALL_TICKETS,
    GET_TICKET_LOCATION,
    GET_TICKET_CATEGORY,
    CREATE_TICKET_SUCCESS,
    CREATE_TICKET_FAIL
} from  '../actions/types' ;

const ticketInfo = JSON.parse(localStorage.getItem('ticket'));

const initialState = ticketInfo
    ? { isLoggedIn: true, ticket: ticketInfo }
    : { isLoggedIn: false, ticket: null };

export default function ticket(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_TICKETS:
            return {
                ...state,
                isLoggedIn: true,
                ticket: payload.ticket,
            };
        case GET_TICKET:
            return {
                ...state,
                isLoggedIn: true,
                ticket: payload.ticket,
            }; 
        case GET_TICKET_LOCATION:
            return {
                ...state,
                isLoggedIn: true,
                ticket: payload.ticket,
            };
        case GET_TICKET_CATEGORY:
            return {
                ...state,
                isLoggedIn: true,
                ticket: payload.ticket,
            };
        case CREATE_TICKET_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                ticket: payload.ticket,
            };
        case CREATE_TICKET_FAIL:
            return {
                ...state,
                isLoggedIn: true,
                ticket: payload.ticket,
            };
        default:
            return state;
    }
}
        