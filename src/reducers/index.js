import { combineReducers } from 'redux';
import auth from './auth.reducer';
import chats from './chat.reducer';
import selectedChat from './selectedChat.reducer';
import contacts from './contacts.reducer';
import messages from './messages.reducer';

export default combineReducers({
  auth,
  chats,
  selectedChat,
  contacts,
  messages,
});
