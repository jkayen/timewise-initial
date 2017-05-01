import React, { Component } from 'react';
import { Container, Content, View, H2, H3, Text , Button, Icon, Footer, FooterTab, ListItem} from 'native-base';

import MyHeader from './MyHeader';
import { activitiesByTime } from '../database/duration';

export default class Analysis extends Component {
  constructor(props) {
    super(props)
    this.state = {
      longest: '',
      ordered: [],
      total: 0
    }
  }

  componentWillMount() {
    activitiesByTime()
    .then(arr => {
      this.setState({longest: arr[0].name});
      this.setState({ordered: arr});
      let totalTime = arr.reduce((acc, curr) => acc + curr.duration, 0)
      this.setState({total: totalTime})
    })

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <MyHeader />
        <Content>
          <H2>You've spent most of your time {this.state.longest}</H2>
          <H3>Here's how the rest of your time stacks up:</H3>
          {
            this.state.ordered.map((v, i) => {
              return (
                <ListItem key={i}>
                  <Text>{v.name}: {Math.floor(v.duration / this.state.total * 100)}%</Text>
                </ListItem>
              )
            })
          }
        </Content>
        <Footer>
        <FooterTab>
          <Button
            block light
            onPress={() => navigate('Home')}>
            <Text>Okay, got it.</Text>
          </Button>
        </FooterTab>
      </Footer>
      </Container>

    )
  }
}
