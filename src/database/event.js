import { AsyncStorage } from 'react-native';

// set new event value
const createEventValue = (name, comment = null, start = Date.now()) => {
  return {name, comment, start, next: null}
}

export default function event (name, comment, date) {
  let currKey, prevEvent;
  const currVal = JSON.stringify(createEventValue(name, date, comment));
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
  .then(value => {
    if (+value !== 1) {
      prevEvent = `event_${value - 1}`;
      const nextEvent = JSON.stringify({next: currKey})
      AsyncStorage.mergeItem(prevEvent, nextEvent)
    }
    return value;
  })
  // increment nextEventId
  .then(value => {
    const nextValue = JSON.stringify(+value + 1)
    AsyncStorage.setItem('nextEventId', nextValue);
  })
}


