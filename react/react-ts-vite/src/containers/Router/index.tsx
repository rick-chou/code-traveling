import React, { FC } from 'react'
import RouterTemp from '@router/temp'
import { RouteConfigComponentProps } from 'react-router-config'
const index: FC<RouteConfigComponentProps> = (props: RouteConfigComponentProps) => {
  return <RouterTemp routerName="/router" renderRoutes={props!.route!.routes} />
}
export default index
