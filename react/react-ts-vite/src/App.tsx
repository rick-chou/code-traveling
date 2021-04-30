import React, { FC } from 'react'
import { Button } from 'antd'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@router/index'
const App: FC = () => {
  console.log(routes);
  return (
    <Router>
      {routes.map((route, idx) => {
        return (
          <NavLink to={route.path} key={idx}>
            <Button>{route.path.slice(1).toUpperCase()}</Button>
          </NavLink>
        )
      })}
      {renderRoutes(routes)}
    </Router>
  )
}

export default App
