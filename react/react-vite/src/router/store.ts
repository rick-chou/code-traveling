import redux from '@/containers/Store/Redux'
import home from '@/containers/Store/Redux/Home'
import article from '@/containers/Store/Redux/Article'
import mobx from '@containers/Store/Mobx/'
import classMobx from '@containers/Store/Mobx/Class'
import funcMobx from '@containers/Store/Mobx/Func'

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
        path: '/mobx/class',
        component: classMobx,
      },
      {
        path: '/mobx/func',
        component: funcMobx,
      },
    ],
  },
]

export default routes
