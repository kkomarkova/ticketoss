import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_RESPONSE,
    REFRESH_TOKEN
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
export const login = (email, password) => (dispatch) => {
        return AuthService.login(email, password).then(
            (data) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { user: data },
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
  
 export const getCurrentUser = () => (dispatch) => {
    return AuthService.getCurrentUser().then(
        (user) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {user: user},
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
    
