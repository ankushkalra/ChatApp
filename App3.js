import 'react-native-gesture-handler';
import React from 'react';
import {
  createAppContainer,
  DrawerNavigator,
} from 'react-navigation';
import AuthLoading from './src/screens/AuthLoading';
import SignInScreen from './src/screens/SignInScreen';
import ChatScreen from './src/screens/ChatScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import { Provider } from 'react-redux';
import store from './src/store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator(
  {
    Chat: ChatScreen,
    Contact: ContactsScreen,
  },
  { initialRouteName: 'Contact' },
);
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export const Drawer = DrawerNavigator({
  AppStack: {
    screen: AppStack,
  },
});

const DrawerNav = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Chat">
      <Drawer.Screen name="Chat" component={ChatScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: DrawerNav,
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
