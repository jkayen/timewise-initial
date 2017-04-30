import React, { Component } from 'react';
import { Container, Content, View, H1, H3, Text , Button, Icon} from 'native-base';

import Prompt from './Prompt';
// import checkLastEvent from '../database/checkLastEvent';

// HOMESCREEN
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEventId: '',
      currentEventTime: ''
    }
  }
  // componentWillMount() {
  //   return AsyncStorage.getItem('nextEventId')
  //   .then(value => {
  //     if (value) {
  //       return `entry_${value - 1}`;
  //     }
  //   })
  // }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <H1 style={{
            color: 'red',
            fontWeight: 'bold',
            textAlign: 'center'}}>
            timewise.
          </H1>
          <Text>A personal fitness tracker</Text>
          {
          this.state.currentEventId ? (
            <View>
              <H3>It's been </H3>
              <Button />
            </View>
          ) : (
            <Button
              iconLeft
              onPress={() => navigate('Prompt')}>
              <Icon name='beer' />
              <Text>What are you up to?</Text>
            </Button>
          )
          }
        </Content>
      </Container>
    )
  }
}
