import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import HomeScreen from './components/Home';
import Prompt from './components/Prompt';



// HOMESCREEN
class App extends Component {
  render() {
    return (
      <Homescreen />
    )
  }
}

const timewise = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Prompt: {
    screen: Prompt,
    navigationOptions: {
      header: null
    }
  }
})

AppRegistry.registerComponent('timewise', () => timewise);


