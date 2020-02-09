import actions from './auth.actions';
import messageActions from './message.actions';
import contacts from './contacts.actions';
import chat from './chat.actions';

export const login = actions.login;
export const logout = actions.logout;
export const sendMessage = messageActions.sendMessage;
export const getMessages = messageActions.getMessages;
export const loadContacts = contacts.loadContacts;
export const selectChat = chat.selectChat;
export const setAuth = actions.setAuth;
