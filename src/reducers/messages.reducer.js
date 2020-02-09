import { MESSAGE_SENT } from '../constants/actionTypes';

const intialState = [];

export default function(state = intialState, action) {
  switch (action.type) {
    case MESSAGE_SENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
