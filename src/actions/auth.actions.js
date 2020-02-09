import axios from 'axios';
import { LOGIN, LOGOUT, SET_AUTH, CHATS } from '../constants/actionTypes';
import { LOGIN_ROUTE } from '../constants/apiPaths';
import Config from 'react-native-config';
import { AsyncStorage } from 'react-native';

function login({ username, password }) {
  return async dispatch => {
    try {
      console.warn('2. username, password = ', username, password);
      console.warn('3. Url = ', `${Config.API_URL}${LOGIN_ROUTE}`);
      const result = await axios({
        method: 'post',
        url: `${Config.API_URL}${LOGIN_ROUTE}`,
        data: {
          email: username,
          password,
        },
      });

      await AsyncStorage.multiSet([
        ['accessToken', result.data.token],
        ['userId', result.data.user._id],
      ]);

      dispatch({
        type: LOGIN,
        payload: {
          accessToken: result.data.token,
          userId: result.data.user._id,
        },
      });
    } catch (error) {
      console.warn('Error: ', error);
      throw error;
    }
  };
}

function logout() {
  return async dispatch => {
    try {
      const result = await AsyncStorage.multiRemove(['accessToken', 'userId']);
      dispatch({ type: LOGOUT });
      console.warn('5. result = ', result);
    } catch (error) {
      console.warn('Error: ', error);
    }
  };
}

function setAuth(auth) {
  return {
    type: SET_AUTH,
    payload: auth,
  };
}

export default { login, logout, setAuth };
