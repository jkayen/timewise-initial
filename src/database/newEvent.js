import { AsyncStorage } from 'react-native';

// set new event value
const createEventValue = (name, comment = null, start) => {
  return {name, comment, start, next: null, duration: null}
}

export default function newEvent (name, comment, date = Date.now()) {
  let currKey, prevEvent;
  const currVal = JSON.stringify(createEventValue(name, comment, date));
  // set currKey to nextEventId and create new event in storage
  // if no events have been made yet, then create nextEventId to record event ids
  AsyncStorage.getItem('nextEventId')
  .then(value => {
    if (!value) {
      AsyncStorage.setItem('nextEventId', '1');
      value = 1;
    }
    currKey = `event_${value}`;
    AsyncStorage.setItem(currKey, currVal);
    return value;
  })
  // set currKey as the next of prev
  // and calculate the duration
  .then(value => {
    if (+value !== 1) {
      prevEvent = `event_${value - 1}`;
      let duration;
      AsyncStorage.getItem(prevEvent)
      .then(event => {
        duration = date - JSON.parse(event).start;
        const nextEvent = JSON.stringify({next: currKey, duration})
        AsyncStorage.mergeItem(prevEvent, nextEvent)
      })
    }
    return value;
  })
  // increment nextEventId
  .then(value => {
    const nextValue = JSON.stringify(+value + 1)
    AsyncStorage.setItem('nextEventId', nextValue);
  })
}


