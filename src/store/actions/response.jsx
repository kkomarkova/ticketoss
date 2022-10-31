import { SET_RESPONSE, CLEAR_RESPONSE } from './types';

export const setResponse = (response) => (dispatch) => {
    dispatch({
        type: SET_RESPONSE,
        payload: response
    });
}

export const clearResponse = () => (dispatch) => {
    dispatch({
        type: CLEAR_RESPONSE
    });
}