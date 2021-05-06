import { action, observable } from 'mobx'

class Store {
  @observable cache = { queue: [] }
  @action.bound refresh() {
    this.cache.queue.push(1)
  }
}

export default Store
