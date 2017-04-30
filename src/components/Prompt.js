import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content, Footer, FooterTab, Form, Item, Input, Button, View, H2, Text } from 'native-base';

import MyHeader from './MyHeader';
import checkTime from '../utilities/time';
import newEvent from '../database/newEvent';

export default class Prompt extends Component {
  constructor(props) {
    super(props)
    this.state = {activity: ''};
    this.submitEntry = this.submitEntry.bind(this)
  }

  submitEntry() {
    newEvent(this.state.activity);
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <MyHeader />

        <Content>
          <View style={{margin: 20}}>
            <H2>It is {checkTime()},</H2>
            <H2>I am currently...</H2>
          </View>

          <Form>
             <Item>
                <Input
                  placeholder="sleeping..."
                  onChangeText={text => this.setState({activity: text})}
                />
             </Item>
          </Form>
        </Content>

        <Footer>
          <FooterTab>
            <Button
              primary full
              onPress={() => {
                this.submitEntry;
                navigate('Home')
              }}>
              <Text style={{color: "white"}}>Submit</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    )
  }
}
