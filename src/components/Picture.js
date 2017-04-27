import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

export default class Picture extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>'What are you up to?'</Text>
      </View>
    );
  }
}
