import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthLoading from './src/screens/AuthLoading';
import SignInScreen from './src/screens/SignInScreen';
import ChatScreen from './src/screens/ChatScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import { Provider } from 'react-redux';
import store from './src/store';

const AppStack = createStackNavigator(
  {
    Chat: ChatScreen,
    Contact: ContactsScreen,
  },
  { initialRouteName: 'Contact' },
);
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
