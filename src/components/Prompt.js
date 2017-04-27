import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Form, Item, Input, Button, View, H2, Text } from 'native-base';

import MyHeader from './MyHeader';
import checkTime from '../utilities/time';

export default class Prompt extends Component {
  render() {
    return (
      <Container>

        <MyHeader />

        <Content>
          <View style={{margin: 20}}>
            <H2>It is {checkTime()},</H2>
            <H2>what are you up to?</H2>
          </View>

          <Form>
             <Item>
                <Input placeholder="sleeping..."/>
             </Item>
          </Form>
        </Content>

        <Footer>
          <FooterTab>
            <Button primary full>
              <Text style={{color: "white"}}>Submit</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    )
  }
}
