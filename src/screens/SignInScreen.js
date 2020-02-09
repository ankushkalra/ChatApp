import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { Button, Content, Form, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import { login } from '../actions';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onUsernameChange(text) {
    this.setState({ username: text });
  }

  onPasswordChange(text) {
    this.setState({ password: text });
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Content contentInsetAdjustmentBehavior="automatic">
          <Form>
            <Item>
              <Input
                placeholder="Username"
                value={this.state.username}
                onChangeText={this.onUsernameChange}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Password"
                value={this.state.password}
                onChangeText={this.onPasswordChange}
              />
            </Item>
            <View style={styles.buttonContainer}>
              <Button style={styles.button} onPress={this._signInAsync}>
                <Text style={styles.signInLabel}>Sign in!</Text>
              </Button>
            </View>
            <Text>{this.props.accessToken}</Text>
          </Form>
        </Content>
      </>
    );
  }

  _signInAsync = async () => {
    this.props
      .login({
        username: this.state.username,
        password: this.state.password,
      })
      .then(() => {
        this.props.navigation.navigate('App');
      });
  };
}

const mapStateToProps = ({ auth }) => ({
  accessToken: auth.accessToken,
});

const mapDispatchToProps = dispatch => ({
  login: ({ username, password }) => {
    return dispatch(login({ username, password }));
  },
});

const styles = StyleSheet.create({
  buttonContainer: { marginLeft: 20, marginRight: 20 },
  button: { justifyContent: 'center' },
  signInLabel: { backgroundColor: 'red' },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
