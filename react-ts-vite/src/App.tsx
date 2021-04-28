import React, { FC } from 'react'
import { Button } from 'antd'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@router/index'
import styles from './index.module.scss'
const App: FC = () => {
  return (
    <Router>
      {routes.map((route, idx) => {
        return (
          <Button>
            <NavLink to={route.path} key={idx}>
              {route.path.slice(1)}
            </NavLink>
          </Button>
        )
      })}
      {renderRoutes(routes)}
    </Router>
  )
}

export default App
