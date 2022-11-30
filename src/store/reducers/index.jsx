import { combineReducers } from 'redux';
import auth from './auth';
import response from './response';
import user from './user';
import ticket from './ticket';
import paymet from './payment';

//We use reducer composition to split the state into multiple reducers
export default combineReducers({
    auth,
    response,
    user,
    ticket,
    paymet
});
