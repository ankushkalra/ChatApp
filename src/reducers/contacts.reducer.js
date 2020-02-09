import { LOAD_CONTACTS } from '../constants/actionTypes';

const intialState = [];

export default function(contacts = intialState, action) {
  switch (action.type) {
    case LOAD_CONTACTS:
      return action.payload;
    default:
      return contacts;
  }
}
