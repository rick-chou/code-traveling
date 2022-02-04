import performance from '@/containers/performance/index'
import shouldComponentUpdate from '@/containers/performance/shouldComponentUpdate'
import memo from '@/containers/performance/memo'
import pureComponent from '@/containers/performance/pureComponent'

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
