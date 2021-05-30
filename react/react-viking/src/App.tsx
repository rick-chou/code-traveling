import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from '@store/index'

import routes from '@router/index'

import styles from '@styles/common.module.scss'

// import Demo from '@components/01_锚点定位'
// import Demo from '@components/02_学校成绩报告v3'
import Demo from '@components/03_table序号antd'

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Demo />
      </div>
    </Provider>
  )
}

export default App
