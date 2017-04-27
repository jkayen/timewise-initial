import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, H1, Text } from 'native-base';

import Home from './components/Home';
import Prompt from './components/Prompt'

export default class App extends Component{
  render() {
    return (
      <Prompt />
    )
  }
}

// import React, { Component } from 'react';
// import { Router, Scene } from 'react-native-router-flux';

// import PageOne from './pageOne';
// import PageTwo from './pageTwo';

// export default class App extends Component {
//   render() {
//     return (
//       <Router hideNavBar= "true">
//         <Scene key="root">
//           <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
//           <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
//         </Scene>
//       </Router>
//     )
//   }
// }
