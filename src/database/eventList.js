import { AsyncStorage } from 'react-native';

let list = ['writing','reading','watching tv','going to the movies','sleeping','going for a walk','working','coding']

const generateList = (comp) => {
  AsyncStorage.getAllKeys(keys => {
          console.log('HEAR ME', keys)
    AsyncStorage.multiGet(keys, (err, stores) => {
      let arr = [];
      stores.forEach(value => {
        value = JSON.parse(value);
        if (value.name) arr.push(value.name);
      })
      comp.setState({selection: arr});
    })
  })
}

module.exports = generateList;
