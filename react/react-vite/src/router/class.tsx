import classComponents from '@/containers/class'

import setState from '@containers/class/setState'

const routes = [
  {
    path: '/class',
    component: classComponents,
    routes: [
      {
        path: '/class/setState',
        component: setState,
      },
    ],
  },
]

export default routes
