import axios from 'axios';
import Config from 'react-native-config';
import {
  LOAD_CONTACTS,
} from '../constants/actionTypes';
import { VERIFY_CONTACTS } from '../constants/apiPaths';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

function loadContacts(auth) {
  return async dispatch => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(async () => {
      Contacts.getAll(async (err, contacts) => {
        if (err) {
          console.warn('Error: ', err);
        } else {
          contacts.forEach(c => {
            const { phoneNumbers } = c;
            let { number } = phoneNumbers[0];
            c.number = number.match(/\d/g).join('');
            delete c.phoneNumbers;
            return c;
          });

          const result = await axios({
            method: 'post',
            url: `${Config.API_URL}${VERIFY_CONTACTS}`,
            headers: { access_key: auth.accessToken },
            data: {
              phoneNumbers: contacts.map(c => c.number),
            },
          });

          contacts = contacts.map(c => {
            c.apiVerified = result.data[c.number];
            return c;
          });

          dispatch({ type: LOAD_CONTACTS, payload: contacts });
        }
      });
    });
  };
}

export default { loadContacts };
