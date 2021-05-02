import store from '@containers/Store'
import home from '@/containers/Store/Redux/Home'
import article from '@/containers/Store/Redux/Article'

const routes = [
  {
    path: '/store',
    component: store,
    routes: [
      {
        path: '/store/redux/home',
        component: home,
      },
      {
        path: '/store/redux/article',
        component: article,
      },
    ],
  },
]

export default routes
