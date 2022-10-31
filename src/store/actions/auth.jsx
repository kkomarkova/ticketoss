import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_RESPONSE,
} from './types';

import AuthService from '../services/auth.service';

export const register = (
    firstName, 
    lastName, 
    email, 
    password, 
    phoneNumber
    ) => (dispatch) => {
    return AuthService.register(
        firstName, 
        lastName, 
        email, 
        password, 
        phoneNumber
        ).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
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
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_RESPONSE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};
export const login = (username, password) => (dispatch) => {
        return AuthService.login(username, password).then(
            (data) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user: data},
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
                    type: LOGIN_FAIL,
                });

                dispatch({
                    type: SET_RESPONSE,
                    payload: message,
                });

                return Promise.reject();
            }
        );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};

