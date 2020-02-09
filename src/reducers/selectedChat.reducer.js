import { SELECT_CHAT } from '../constants/actionTypes';

const intialState = null;

export default function(state = intialState, action) {
  switch (action.type) {
    case SELECT_CHAT:
      return action.payload;
    default:
      return state;
  }
}
