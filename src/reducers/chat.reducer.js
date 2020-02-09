import { CHATS } from '../constants/actionTypes';

const intialState = [];

export default function(state = intialState, action) {
  switch (action.type) {
    case CHATS:
      return [...action.payload];
    default:
      return state;
  }
}
