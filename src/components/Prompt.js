import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content, Footer, FooterTab, Form, Item, Input, Button, View, H2, Text } from 'native-base';

import MyHeader from './MyHeader';
import checkTime from '../utilities/time';
import event from '../database/event';

export default class Prompt extends Component {
  constructor(props) {
    super(props)
    this.state = {activity: ''};
  }

  submitEntry() {
    return event(this.state.activity)
  }

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
                <Input
                  placeholder="sleeping..."
                  onChangeText={text => this.setState({text})}
                />
             </Item>
          </Form>
        </Content>

        <Footer>
          <FooterTab>
            <Button
              primary full
              onPress={this.submitEntry}>
              <Text style={{color: "white"}}>Submit</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    )
  }
}
