import axios from 'axios';
import { MESSAGE_SENT } from '../constants/actionTypes';
import Config from 'react-native-config';
import { SEND_MESSAGE, GET_MESSAGES_BY_CHAT } from '../constants/apiPaths';

function sendMessage(message, auth, selectedChat) {
  return async dispatch => {
    try {
      const result = await axios({
        method: 'post',
        url: `${Config.API_URL}${SEND_MESSAGE}`,
        headers: { access_key: auth.accessToken },
        data: {
          chatId: selectedChat,
          text: message,
        },
      });

      dispatch({
        type: MESSAGE_SENT,
        payload: result.data.message,
      });
    } catch (error) {
      console.warn('Error: ', error);
      throw error;
    }
  };
}

function getMessages(chatId) {
  return async dispatch => {
    try {
      const result = await axios({
        method: 'get',
        url: `${Config.API_URL}${GET_MESSAGES_BY_CHAT}/${chatId}`,
      });
      console.warn('1. result = ', result);
    } catch (error) {
      console.warn('Error: ', error);
    }
  };
}

export default { sendMessage, getMessages };
