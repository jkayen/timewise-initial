const FETCH_CURRENT_EVENT = 'FETCH_CURRENT_EVENT';

const getEvent = event => {
  return {
    type: FETCH_CURRENT_EVENT,
    event
  }
}

const reducer = (action, type) => {
  switch (type) {
    case FETCH_CURRENT_EVENT:
      return action;
  }
}

