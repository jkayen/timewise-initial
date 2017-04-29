/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import './ReactotronConfig';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';



import App from './src/App'

export default class timewise extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('timewise', () => timewise);
