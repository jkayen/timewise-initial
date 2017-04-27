import React, { Component } from 'react';
import { Container, Content, H1, Text } from 'native-base';

import Picture from './Picture';
import Property from './Property';

export default class Home extends Component{
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
