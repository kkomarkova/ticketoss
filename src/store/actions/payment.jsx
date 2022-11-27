import { 
    CREATE_PAYMENT_FAIL,
    CREATE_PAYMENT_SUCCESS,
    GET_ALL_PAYMENTS,
    GET_PAYMENT,
    SET_RESPONSE,
    CLEAR_RESPONSE 
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
}