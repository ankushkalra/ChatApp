import axios from 'axios';
import Config from 'react-native-config';
import { SELECT_CHAT } from '../constants/actionTypes';
import { OPEN_CHAT } from '../constants/apiPaths';

function selectChat(number) {
  return async (dispatch, getState) => {
    try {
      const { auth } = getState();
      const result = await axios({
        method: 'post',
        url: `${Config.API_URL}${OPEN_CHAT}`,
        headers: { access_key: auth.accessToken },
        data: {
          number,
        },
      });

      dispatch({
        type: SELECT_CHAT,
        payload: result.data.chatId,
      });
    } catch (error) {
      console.warn('Error: ', error);
    }
  };
}

export default { selectChat };
console.warn('Login action working');
