import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import Prompt from './components/Prompt';
import Settings from './components/Settings';
import Refresh from './components/Refresh';

// HOMESCREEN
class App extends Component {
  render() {
    return (
      <Home />
    )
  }
}

const timewise = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Prompt: {
    screen: Prompt,
    navigationOptions: {
      header: null
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null
    }
  },
  Refresh: {
    screen: Refresh,
    navigationOptions: {
      header: null
    }
  }
})

AppRegistry.registerComponent('timewise', () => timewise);


