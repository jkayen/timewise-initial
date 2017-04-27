import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, H1, Text } from 'native-base';

import Picture from './components/Picture';
import Property from './components/Property';

export default class App extends Component{
  render() {
    return (
      <Container>
        <Content>
          <H1 style={{
            color: 'red',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            timewise.
          </H1>
          <Text> A personal fitness tracker</Text>
          <Picture />
          <Property activity='knitting' />
        </Content>
      </Container>
    )
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
