import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content, Footer, FooterTab, Form, Item, Input, Button, View, H2, Text, ListItem } from 'native-base';

import MyHeader from './MyHeader';
import { checkTime } from '../utilities/time';
import newEvent from '../database/newEvent';
import { activitiesByTime } from '../database/duration';

export default class Prompt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activity: '',
      selection: []
    };
    this.submitEntry = this.submitEntry.bind(this);
    this.generateList = this.generateList.bind(this);
  }

  submitEntry() {
    newEvent(this.state.activity);
  }

  generateList() {
    activitiesByTime()
    .then(arr => {
      arr = arr.map(obj => obj.name);
      this.setState({selection: arr});
    })
  }


  componentDidMount() {
    this.generateList();
  }

  render() {
    const { navigate } = this.props.navigation;
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
                placeholder="tell me..."
                onChangeText={text => this.setState({activity: text})}
                autoCapitalize="none"
                value={this.state.activity}
              />
            </Item>
            {
              this.state.selection.map((value, i) => {
                return (
                  <ListItem key={i}>
                    <Text onPress={() => this.setState({activity: value})}>{value}</Text>
                  </ListItem>
                )
              })
            }
          </Form>

        </Content>

        <Footer>
          <FooterTab>
            <Button
              primary full
              onPress={() => {
                this.submitEntry();
                navigate('Home');
              }}>
              <Text style={{color: "white"}}>Submit</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    )
  }
}
