import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@store/index'

import routes from '@router/index'

const App = () => {
  return <Provider store={store}>hello viking</Provider>
}

export default App
