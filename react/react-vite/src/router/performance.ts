import performance from '@/containers/Performance/index'
import shouldComponentUpdate from '@containers/Performance/shouldComponentUpdate'
import memo from '@containers/Performance/memo'
import pureComponent from '@containers/Performance/pureComponent'

const routes = [
  {
    path: '/performance',
    component: performance,
    routes: [
      {
        path: '/performance/shouldComponentUpdate',
        component: shouldComponentUpdate,
      },
      {
        path: '/performance/memo',
        component: memo,
      },
      {
        path: '/performance/pureComponent',
        component: pureComponent,
      },
    ],
  },
]

export default routes
