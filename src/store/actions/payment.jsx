import { 
    CREATE_PAYMENT_FAIL,
    CREATE_PAYMENT_SUCCESS,
    GET_ALL_PAYMENTS,
    GET_PAYMENT,
    SET_RESPONSE,
    GET_ORDER_BY_USER_ID,
    CREATE_ORDER_SUCCESS
} from './types';

import PaymentService from '../services/payment.service';

//Create payment
export const createPayment = (
    CardNumber,
    OwnerName,
    ExpiryDate,
    SafetyCode,
    UserId
) => (dispatch) => {
    return PaymentService.createPayment(
        CardNumber,
        OwnerName,
        ExpiryDate,
        SafetyCode,
        UserId
    ).then(
        (response) => {
            dispatch({
                type: CREATE_PAYMENT_SUCCESS,
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
                    type: CREATE_PAYMENT_FAIL,
                });

                dispatch({
                    type: SET_RESPONSE,
                    payload: message,
                });

            return Promise.reject();
        }
    );
};

//Get all payments
export const getAllPayments = () => (dispatch) => {
    return PaymentService.getAllPayments().then(
        (response) => {
            dispatch({
                type: GET_ALL_PAYMENTS,
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

            return Promise.reject();
        }
    );
};

//Get payment
export const getPayment = (id) => (dispatch) => {
    return PaymentService.getPayment(id).then(
        (response) => {
            dispatch({
                type: GET_PAYMENT,
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
                    type: SET_RESPONSE,
                    payload: message,
                });

            return Promise.reject();
        }
    );
}

export const getOrderByUserId = (id) => (dispatch) => {
    return PaymentService.getOrderByUserId(id).then(
        (response) => {
            dispatch({
                type: GET_ORDER_BY_USER_ID,
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
                    type: SET_RESPONSE,
                    payload: message,
                });

            return Promise.reject();
        }
    );
}

export const createOrder = (
    UserId,
    TicketId,
    PaymentId,
    OrderDate,
    OrderStatus
) => (dispatch) => {
    return PaymentService.createOrder(
        UserId,
        TicketId,
        PaymentId,
        OrderDate,
        OrderStatus
    ).then(
        (response) => {
            dispatch({
                type: CREATE_ORDER_SUCCESS,
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
                    type: SET_RESPONSE,
                    payload: message,
                });

            return Promise.reject();
        }
    );
}