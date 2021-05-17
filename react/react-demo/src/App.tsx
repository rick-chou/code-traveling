import React from 'react'
import '@styles/antd.css'

import { Provider } from 'react-redux'
import { store } from '@store/index'
// import { BrowserRouter as Router, NavLink } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'

import routes from '@router/index'

import { Tabs } from 'antd'
const { TabPane } = Tabs

function App() {
  console.log(routes)

  return (
    <Provider store={store}>
      {/* {renderRoutes(routes)} */}
      <Tabs defaultActiveKey="1">
        {routes.map((route, idx) => {
          return (
            <TabPane tab={route.path.slice(1).toUpperCase()} key={idx + 1}>
              {route.component()}
            </TabPane>
          )
        })}
      </Tabs>
    </Provider>
  )
}

export default App
