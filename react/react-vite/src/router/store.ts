import redux from '@/containers/store/redux'
import home from '@/containers/store/redux/home'
import article from '@/containers/store/redux/article'
import mobx from '@/containers/store/mobx'
import classMobx from '@/containers/store/mobx/Class'
import funcMobx from '@/containers/store/mobx/Func'

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
