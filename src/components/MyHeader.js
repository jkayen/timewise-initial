import React, { Component } from 'react';
import { Container, Header, Body, Title } from 'native-base';

export default class MyHeader extends Component {
  render() {
    return (
        <Header>
          <Body>
            <Title
              style={{color: "red"}}>
              timewise.
            </Title>
          </Body>
        </Header>
    )
  }
}
