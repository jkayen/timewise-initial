import React, { Component } from 'react';
import { Container, Content, Button, Text, H2 } from 'native-base';
import { AsyncStorage } from 'react-native';

const Refresh = (props) => {
  const { navigate } = props.navigation;
  return (
    <Container>
      <Content>
        <H2>Do you really want to start over?</H2>
        <Button
          rounded danger
          onPress={() => {
            AsyncStorage.clear();
            navigate('Home');
          }}>
          <Text>Yes, please!</Text>
        </Button>
        <Button
          rounded primary
          onPress={() => navigate('Settings')}>
          <Text>Nope, this is a mistake.</Text>
        </Button>
      </Content>
    </Container>
  )
}

module.exports = Refresh;
