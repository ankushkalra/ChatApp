/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { List, ListItem, Text, Button } from 'native-base';
import { connect } from 'react-redux';
import { selectChat, loadContacts } from '../actions';

import { Colors } from 'react-native/Libraries/NewAppScreen';

class ContactsScreen extends React.Component {
  static navigationOptions = {
    title: 'Contacts',
  };

  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }

  componentDidMount() {
    const { auth, loadContactsAction } = this.props;
    loadContactsAction(auth);
  }

  selectContact = number => {
    const { selectChatAction } = this.props;

    selectChatAction(number).then(() => this.props.navigation.navigate('Chat'));
  };

  render() {
    const { contacts } = this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View>
              <List>
                {contacts
                  .filter(contact => contact.apiVerified)
                  .map(contact => {
                    return (
                      <ListItem
                        key={contact.recordID}
                        onPress={() => this.selectContact(contact.number)}>
                        <Text>{`${contact.displayName}: `}</Text>
                        <Text>{contact.number}</Text>
                      </ListItem>
                    );
                  })}
                {contacts
                  .filter(contact => !contact.apiVerified)
                  .map(contact => {
                    return (
                      <ListItem
                        style={styles.notUserContacts}
                        key={contact.recordID}>
                        <Text>{contact.displayName}</Text>
                        <Button success>
                          <Text>Invite</Text>
                        </Button>
                      </ListItem>
                    );
                  })}
              </List>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  notUserContacts: { justifyContent: 'space-between' },
});

const mapStateToProps = ({ auth, contacts }) => {
  return {
    auth,
    contacts,
  };
};

const mapDispatchToProps = dispatch => ({
  loadContactsAction: auth => dispatch(loadContacts(auth)),
  selectChatAction: number => dispatch(selectChat(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen);
