import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content, Footer, FooterTab, Form, Item, Input, Button, View, H2, Text, ListItem } from 'native-base';

import MyHeader from './MyHeader';
import { checkTime } from '../utilities/time';
import newEvent from '../database/newEvent';

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
    AsyncStorage.getAllKeys()
    .then(keys => {
      return AsyncStorage.multiGet(keys)
    })
    .then(stores => {
      let arr = [];
      stores.forEach(kV => {
        let v = JSON.parse(kV[1]);
        if (v.name) arr.push(v.name);
      })
      this.setState({selection: arr});
    })
  }


// FIRST ATTEMPT TO PUT THE NAMES IN DURATION ORDER
    //     AsyncStorage.getItem(store[1].next)
    //     .then(item => {
    //       item = JSON.parse(item);
    //       if (item && item.start && store[1].next) {
    //         store[1].duration = item.start - store[1].start;
    //       }
    //       arr.push({name: store[1].name, duration: store[1].duration})
    //       return arr;
    //     })
    //     .then(arr => {
    //       return arr
    //       .sort((a, b) => b.duration - a.duration)
    //       .map(obj => obj.name)
    //     })
    //     .then(arr => {
    //       return arr.filter(el => typeof el === 'string')
    //     })
    //     .then(arr => {
    //       this.setState({selection: arr})
    //     })
    //   })
    // })
  // }

  // SECOND ATTEMPT TO PUT THE NAMES IN DURATIONAL ORDER
    // generateList() {
  //   AsyncStorage.getAllKeys()
  //   .then(keys => {
  //     return AsyncStorage.multiGet(keys)
  //   })
  //   .then(stores => {
  //     let arr = [];
  //     stores.forEach(store => {
  //       arr.push(JSON.parse(store[1]));
  //     })
  //     return arr;
  //   })
  //   .then(updatedStores => {
  //     updatedStores.forEach(store => {
  //       AsyncStorage.getItem(store.next)
  //       .then(item => {
  //         let arr = this.state.selection;
  //         let obj = JSON.parse(item);
  //         let duration = obj.start - store.start;
  //         arr.push({name: store.name, duration})
  //         this.setState({selection: arr});
  //       })
  //     })
  //   })

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
                placeholder="sleeping..."
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
