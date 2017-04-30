import { AsyncStorage } from 'react-native';

export default function checkLastEvent () {
  let lastEvent;
  let lastEventValue;
  return AsyncStorage.getItem('nextEventId')
  .then(value => {
    if (value) {
      return `entry_${value - 1}`;
    }
  })
  // .catch(err)
  // console.log('LASTEVENT: ', lastEvent)
  // return pastEvents && lastEvent;
}
