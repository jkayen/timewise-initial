import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';

const Settings = (props) => {
  const { navigate } = props.navigation;
  return (
    <Container>
      <Content>
        <Button
          style={{position: 'relative', top: 200}}
          block danger
          onPress={() => navigate('Refresh')}>
          <Text>Erase the past, start anew.</Text>
        </Button>
      </Content>
      <Footer>
        <FooterTab>
          <Button
            block light
            onPress={() => navigate('Home')}>
            <Text>Alternatively, take me home!</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

module.exports = Settings;
