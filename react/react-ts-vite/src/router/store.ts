import redux from '@/containers/Store/Redux'
import home from '@/containers/Store/Redux/Home'
import article from '@/containers/Store/Redux/Article'
import mobx from '@containers/Store/Mobx/'
import todo from '@containers/Store/Mobx/Demo'

const routes = [
  {
    path: '/redux',
    component: redux,
    routes: [
      {
        path: '/redux/home',
        component: home,
      },
      {
        path: '/redux/article',
        component: article,
      },
    ],
  },
  {
    path: '/mobx',
    component: mobx,
    routes: [
      {
        path: '/mobx/home',
        component: todo,
      },
    ],
  },
]

export default routes
