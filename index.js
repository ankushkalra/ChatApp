/**
 * @format
 */
import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import App from './App4';
import { name as appName } from './app.json';

// const App = () => (
//   <View>
//     <Text>Hello</Text>
//   </View>
// );

AppRegistry.registerComponent(appName, () => App);
