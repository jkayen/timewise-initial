/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Picture from './Components/Picture';
import Property from './Components/Property';

export default class timewise extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         timewise.
        </Text>
        <Text style={styles.instructions}>
          A personal fitness tracker
        </Text>
        <Picture />
        <Property activity='knitting' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 50,
    color: 'red',
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('timewise', () => timewise);
