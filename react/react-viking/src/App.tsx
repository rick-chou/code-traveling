import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@store/index'

import routes from '@router/index'

import styles from '@styles/common.module.scss'

import Demo01 from '@components/01_锚点定位'

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Demo01 />
      </div>
    </Provider>
  )
}

export default App
