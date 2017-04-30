import { AsyncStorage } from 'react-native';

const update = () => {
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
      console.log('VALUE', value)
      const obj = JSON.parse(value);
      this.setState({
        currentEventName: obj.name,
        currentEventStart: obj.start
      })
    })
  })
}

module.exports = update;
