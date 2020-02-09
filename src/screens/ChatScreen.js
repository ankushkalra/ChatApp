import React from 'react';
import { View, SafeAreaView, Text, StatusBar, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { List, ListItem, Form, Button, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import { logout, sendMessage, getMessages } from '../actions';
import Message from '../components/Message';

class ChatScreen extends React.Component {
  state = {
    messages: [
      {
        _id: '5e3eb7f8a1e5774b7be6721d',
        chatId: '5e3eb7f8a1e5774b7be6721c',
        sender: '5e3eb7f880553a4b1035f6d0',
        text: 'Hello',
        date: '2020-02-08T19:07:05.241Z',
      },
      {
        _id: '5e3eb7f8a1e5774b7be6721e',
        chatId: '5e3eb7f8a1e5774b7be6721c',
        sender: '5e3eb7f880553a4b1035f6d1',
        text: 'World',
        date: '2020-02-08T19:07:05.241Z',
      },
    ],
    typedMessage: '',
  };

  componentDidMount() {
    // const { getMessagesAction, selectedChat } = this.props;
    // getMessagesAction(selectedChat);
  }

  onTypeMesssage = text => {
    this.setState({ typedMessage: text });
  };

  sendMessage = () => {
    const { typedMessage } = this.state;
    const { auth, sendMessageAction, selectedChat } = this.props;
    console.warn('2. typedMessage, auth = ', typedMessage, auth);
    sendMessageAction(typedMessage, auth, selectedChat).then(() =>
      this.setState({ typedMessage: '' }),
    );
  };

  logout = () => {
    const { logoutAction, navigation } = this.props;
    logoutAction().then(() => {
      navigation.navigate('Auth');
    });
  };

  render() {
    const { auth, messages: propMessages } = this.props;
    const { messages, typedMessage } = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeAreaView}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <Button onPress={this.logout}>
                <Text>Logout</Text>
              </Button>
              <List>
                {messages.map(msg => {
                  return (
                    <Message
                      key={msg._id}
                      align={msg.sender === auth.userId ? 'left' : 'right'}
                      text={msg.text}
                    />
                  );
                })}
                {propMessages.map(msg => {
                  return (
                    <Message
                      key={msg._id}
                      align={msg.sender === auth.userId ? 'left' : 'right'}
                      text={msg.text}
                    />
                  );
                })}
              </List>
            </View>
          </ScrollView>
          <Form style={styles.form}>
            <Item style={styles.messageInput} rounded>
              <Input
                placeholder="Type here..."
                value={typedMessage}
                onChangeText={this.onTypeMesssage}
              />
            </Item>
            <Button style={styles.button} onPress={this.sendMessage}>
              <Text style={styles.sendLabel}>Send</Text>
            </Button>
          </Form>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = ({ auth, selectedChat, messages }) => {
  return {
    auth,
    selectedChat,
    messages,
  };
};

const mapDispatchToProps = dispatch => ({
  getMessagesAction: chatId => dispatch(getMessages(chatId)),
  sendMessageAction: (messsage, auth, selectedChat) => {
    return dispatch(sendMessage(messsage, auth, selectedChat));
  },
  logoutAction: () => dispatch(logout()),
});

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 10,
    paddingRight: 5,
  },
  messageInput: { flex: 1 },
  button: {
    marginLeft: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  sendLabel: { color: 'white' },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
