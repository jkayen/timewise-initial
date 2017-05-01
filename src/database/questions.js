// WHY DON'T THESE WORK???

generateList() {
    AsyncStorage.getAllKeys()
    .then(keys => {
      return AsyncStorage.multiGet(keys)
    })
    .then(stores => {
      let arr = [];
      stores.forEach(kV => {
        let v = JSON.parse(kV[1]);
        if (v.name) arr.push(v.name);
      })
      this.setState({selection: arr});
    })
  }


// FIRST ATTEMPT TO PUT THE NAMES IN DURATION ORDER
        AsyncStorage.getItem(store[1].next)
        .then(item => {
          item = JSON.parse(item);
          if (item && item.start && store[1].next) {
            store[1].duration = item.start - store[1].start;
          }
          arr.push({name: store[1].name, duration: store[1].duration})
          return arr;
        })
        .then(arr => {
          return arr
          .sort((a, b) => b.duration - a.duration)
          .map(obj => obj.name)
        })
        .then(arr => {
          return arr.filter(el => typeof el === 'string')
        })
        .then(arr => {
          this.setState({selection: arr})
        })
      })
    })
  }

  // SECOND ATTEMPT TO PUT THE NAMES IN DURATIONAL ORDER
    generateList() {
    AsyncStorage.getAllKeys()
    .then(keys => {
      return AsyncStorage.multiGet(keys)
    })
    .then(stores => {
      let arr = [];
      stores.forEach(store => {
        arr.push(JSON.parse(store[1]));
      })
      return arr;
    })
    .then(updatedStores => {
      updatedStores.forEach(store => {
        AsyncStorage.getItem(store.next)
        .then(item => {
          let arr = this.state.selection;
          let obj = JSON.parse(item);
          let duration = obj.start - store.start;
          arr.push({name: store.name, duration})
          this.setState({selection: arr});
        })
      })
    })
