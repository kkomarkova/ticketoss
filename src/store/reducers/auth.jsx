import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REFRESH_TOKEN,
} from '../actions/types';

//The auth reducer updates the auth state when a user logs in or out
const user = JSON.parse(localStorage.getItem('accessToken'));

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

const auth = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case REFRESH_TOKEN:
            return {
                ...state,
                isLoggedIn: true,
                user:{...user, accessToken:payload }
            };

        default:
            return state;
    }
}

export default auth;