import { SET_RESPONSE, CLEAR_RESPONSE } from '../actions/types';

//This reducer updates response state when a response is set or cleared
const initialState = {};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_RESPONSE:
            return {
                ...state,
                response: payload
            };
        case CLEAR_RESPONSE:
            return {
                ...state,
                response: null
            };
        default:
            return state;
    }
}
