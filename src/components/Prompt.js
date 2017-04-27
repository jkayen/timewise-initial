import React, { Component } from 'react';
import { Container, Header, Content, Body, Title, H2, Text } from 'native-base';

import checkTime from '../utilities/time';

export default class Prompt extends Component {
  render() {
    return (
      <Container>

        <Header>
          <Body>
            <Title>timewise</Title>
          </Body>
        </Header>

        <Content>
          <H2>It is {checkTime()}, what are you up to?</H2>
        </Content>

      </Container>
    )
  }
}
