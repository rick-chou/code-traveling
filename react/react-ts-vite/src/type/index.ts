import { RouteComponentProps } from 'react-router'

export interface RouteConfigComponentProps<Params extends { [K in keyof Params]?: string } = {}> extends RouteComponentProps<Params> {
  route?: RouteConfig
}

export interface RouteConfig {
  key?: React.Key
  location?: Location
  component?: React.ComponentType<RouteConfigComponentProps<any>> | React.ComponentType
  path?: string | string[]
  exact?: boolean
  strict?: boolean
  routes?: RouteConfig[]
  render?: (props: RouteConfigComponentProps<any>) => React.ReactNode
  [propName: string]: any
}
