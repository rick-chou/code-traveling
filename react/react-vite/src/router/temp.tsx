import React, { FC } from 'react'
// import routes from '@router/index'
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config'

interface IProp extends Partial<RouteConfigComponentProps> {
  routerName: string
  renderRoutes?: RouteConfig[]
}

const index: FC<IProp> = (props: IProp) => {
  return (
    <>
      {renderRoutes(props.renderRoutes)}
    </>
  )
}

export default index
