import React from 'react'
import RouterTemp from '@router/temp'
import { RouteConfigComponentProps } from 'react-router-config'
const index = (props: RouteConfigComponentProps) => {
  return <RouterTemp routerName="/hook" renderRoutes={props!.route!.routes} />
}
export default index
