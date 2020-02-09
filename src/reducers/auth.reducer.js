import { LOGIN, LOGOUT, SET_AUTH } from '../constants/actionTypes';

const intialState = {};

export default function(state = intialState, action) {
  switch (action.type) {
    case LOGIN:
      console.warn('Login action working');
      return action.payload;
    case SET_AUTH:
      return action.payload;
    case LOGOUT:
      return intialState;
    default:
      return state;
  }
}
