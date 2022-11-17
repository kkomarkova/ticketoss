import {
    GET_ALL_USERS,
    GET_USER,
} from '../actions/types';

const userInfo = JSON.parse(localStorage.getItem('userInfo'));

const initialState = userInfo
    ? { isLoggedIn: true, userInfo }
    : { isLoggedIn: false, userInfo: null };

export default function user(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_USERS:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: payload.userInfo,
            };
        case GET_USER:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: payload.userInfo,
            };
        default:
            return state;
    }
}
