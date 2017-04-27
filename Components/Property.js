import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Property extends Component {
  render() {
    return (
      <View>
        <Text>You have spent all your time{this.props.activity}!</Text>
      </View>
    )
  }
}
