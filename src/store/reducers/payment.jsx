import { 
    GET_PAYMENT,
    GET_ALL_PAYMENTS,
    CREATE_PAYMENT_FAIL,
    CREATE_PAYMENT_SUCCESS,

    
} from '../actions/types';

const paymentInfo = JSON.parse(localStorage.getItem('payment'));
const initialState = paymentInfo
? { isLoggedIn: true, payment: paymentInfo }
: { isLoggedIn: false, payment: null };

export default function payment(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_PAYMENTS:
            return {
                ...state,
                isLoggedIn: true,
                payment: payload.payment,
            };
        case GET_PAYMENT:
            return {
                ...state,
                isLoggedIn: true,
                payment: payload.payment,
            };
        case CREATE_PAYMENT_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                payment: payload.payment,
            };
        case CREATE_PAYMENT_FAIL:
            return {
                ...state,
                isLoggedIn: true,
                payment: payload.payment,
            };
        default:
            return state;
    }
}