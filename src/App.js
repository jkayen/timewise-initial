import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, H1, Text } from 'native-base';

import Home from './components/Home';
import Prompt from './components/Prompt'

export default class App extends Component{
  render() {
    return (
      <Prompt />
    )
  }
}

