import React, { FC } from 'react'
import routes from '@router/index'
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'

interface IProp extends Partial<RouteConfigComponentProps> {
  routerName: string
  renderRoutes?: RouteConfig[]
}

const index: FC<IProp> = (props: IProp) => {
  return (
    <div>
      {routes
        .filter((route) => route.path === props.routerName)[0]
        .routes.map((route: any, idx: number) => {
          return (
            <Button key={idx}>
              <NavLink to={route.path}>{route.path.slice(props.routerName.length + 1).split(':')[0]}</NavLink>
            </Button>
          )
        })}
      {renderRoutes(props.renderRoutes)}
    </div>
  )
}

export default index
