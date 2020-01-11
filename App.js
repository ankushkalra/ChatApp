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
  Button,
  StatusBar,
} from 'react-native';

import {Container, Content, List, ListItem, Text} from 'native-base';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  _onPressButton() {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
    })
      .then(() => {
        console.warn('Then');
        Contacts.getAll((err, contacts) => {
          console.warn('Error. err = ', err);
          console.warn('2. contacts = ', contacts);
          if (err === 'denied') {
            // error
          } else {
            // contacts returned in Array
          }
        });
      })
      .catch(err => {
        console.warn('Error: ', err);
      });
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <Button
                onPress={this._onPressButton}
                title={'This is a button'}
              />
              <List>
                <ListItem>
                  <Text>Red</Text>
                </ListItem>
                <ListItem>
                  <Text>Green</Text>
                </ListItem>
                <ListItem>
                  <Text>Blue</Text>
                </ListItem>
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
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    borderColor: 'red',
    borderWidth: 5,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
