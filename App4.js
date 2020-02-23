import 'react-native-gesture-handler';
import React from 'react';
import AuthLoading from './src/screens/AuthLoading';
import SignInScreen from './src/screens/SignInScreen';
import ChatScreen from './src/screens/ChatScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import { Provider } from 'react-redux';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// const AppStack = createStackNavigator(
//   {
//     Chat: ChatScreen,
//     Contact: ContactsScreen,
//   },
//   { initialRouteName: 'Contact' },
// );
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });
// export const Drawer = DrawerNavigator({
//   AppStack: {
//     screen: AppStack,
//   },
// });

// const DrawerNav = () => (
//   <NavigationContainer>
//     <Drawer.Navigator initialRouteName="Chat">
//       <Drawer.Screen name="Chat" component={ChatScreen} />
//     </Drawer.Navigator>
//   </NavigationContainer>
// );

// const Navigation = createAppContainer(
//   createSwitchNavigator(
//     {
//       AuthLoading: AuthLoading,
//       App: DrawerNav,
//       Auth: AuthStack,
//     },
//     {
//       initialRouteName: 'AuthLoading',
//     },
//   ),
// );

const Stack = createStackNavigator();

export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
