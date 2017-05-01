import React, { Component } from 'react';
import { Container, Content, View, H1, H3, Text , Button, Icon, Footer, FooterTab} from 'native-base';
import { AsyncStorage } from 'react-native';
import { Grid, Column, Row } from 'react-native-easy-grid';

import { timeDiff } from '../utilities/time';

// HOMESCREEN
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEventId: '',
      currentEventStart: '',
      currentEventName: ''
    }
    this.updateEvent = this.updateEvent.bind(this);
  }
  updateEvent() {
    AsyncStorage.getItem('nextEventId')
    .then(value => {
      let curr;
      if (value) {
        curr = `event_${value - 1}`;
        this.setState({currentEventId: curr});
      }
      return curr;
    })
    .then(() => {
      AsyncStorage.getItem(this.state.currentEventId)
      .then(value => {
        const obj = JSON.parse(value);
        this.setState({
          currentEventName: obj.name,
          currentEventStart: obj.start
        })
      })
    })
  }

  componentWillMount() {
    this.updateEvent();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{backgroundColor: 'white'}}>
        <Content>
        <Grid>
        <Row style={{height: 100}}>
        </Row>
          <View style={{
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
          }}>

          <Row style={{height: 50}}>
            <H1 style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center'}}>
              timewise.
            </H1>
          </Row>
          <Row style={{height: 50}}>
            <Text style={{
              textAlign: 'center'
            }}>A personal time tracker</Text>
          </Row>

        <Row style={{height: 100}}>
          {
          this.state.currentEventId ? (
            <View>
              <H3>It's been {timeDiff(this.state.currentEventStart)}</H3>
              <Button
                info full
                iconLeft
                onPress={() => navigate('Prompt')}>
                <Icon name='beer' />
                <Text>No longer </Text>
                <Text>{this.state.currentEventName}?</Text>
              </Button>
            </View>
          ) : (
            <Button
              info full
              iconLeft
              onPress={() => navigate('Prompt')}>
              <Icon name='beer' />
              <Text>What are you up to?</Text>
            </Button>
          )
        }
        </Row>
        </View>
        </Grid>
        </Content>

        <Footer>
          <FooterTab>
            <Button
              onPress={() => navigate('Analysis')}>
              <Text>Analysis</Text>
            </Button>
            <Button
              onPress={() => navigate('Settings')}>
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
