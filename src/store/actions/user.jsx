import {
    GET_ALL_USERS,
    GET_USER,
}
from './types';

import UserService from '../services/user.service';

export const getAllUsers = () => (dispatch) => {
    return UserService.getAllUsers().then(
        (response) => {
            dispatch({
                type: GET_ALL_USERS,
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
                type: GET_ALL_USERS,
                payload: message,
               });
            return Promise.reject();
        }
    );
};

export const getUser = (id) => (dispatch) => {
    return UserService.getUser(id).then(
        (response) => {
            dispatch({
                type: GET_USER,
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
                type: GET_USER,
                payload: message,
            });
            return Promise.reject();
        }
    );
}
