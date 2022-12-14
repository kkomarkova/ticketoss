import {
    GET_ALL_USERS,
    GET_USER,
} from '../actions/types';

const initialState = {}

const user = (state = initialState, action) => {
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

export default user;