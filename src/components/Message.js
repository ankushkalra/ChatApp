import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';

export default ({ text, align }) => (
  <View style={align === 'left' ? styles.left : styles.right}>
    <Card>
      <CardItem>
        <Body>
          <Text>{text}</Text>
        </Body>
      </CardItem>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  left: {
    marginLeft: 5,
    marginRight: 30,
  },
  right: {
    marginLeft: 30,
    marginRight: 5,
  },
});
