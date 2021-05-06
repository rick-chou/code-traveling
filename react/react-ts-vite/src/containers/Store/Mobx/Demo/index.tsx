import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
class Store {
  @observable number = 0
  @action.bound add() {
    this.number++
  }
}
let store = new Store()

@observer
class Counter extends Component {
  render() {
    return (
      <div>
        <p>{store.number}</p>
        <button onClick={store.add}>+</button>
      </div>
    )
  }
}

export default Counter
