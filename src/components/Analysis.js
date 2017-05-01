import React, { Component } from 'react';
import { Container, Content, View, H2, H3, Text , Button, Icon, Footer, FooterTab} from 'native-base';

import MyHeader from './MyHeader';

export default class Analysis extends Component {
  render() {
    return (
      <Container>
        <MyHeader />
        <Content>
          <H2>You've spent most of your time {}</H2>
          <H3>Here's how the rest of your time stacks up:</H3>
        </Content>
      </Container>

    )
  }
}
