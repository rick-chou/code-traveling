import React from 'react'
import RouterTemp from '@router/temp'
import { RouteConfigComponentProps } from 'react-router-config'
import { Provider } from 'react-redux'
import store from '@store/redux/index'
const index = (props: RouteConfigComponentProps) => {
  return (
    <Provider store={store}>
      <RouterTemp routerName="/store" renderRoutes={props!.route!.routes} />
    </Provider>
  )
}
export default index
