import router from '@/containers/router'
import home from '@/containers/router/home'
import about from '@/containers/router/about'
import address from '@/containers/router/about/Address'
import culture from '@/containers/router/about/Culture'
import article from '@/containers/router/article'

const routes = [
  {
    path: '/router',
    component: router,
    routes: [
      {
        path: '/router/home',
        component: home,
      },
      {
        path: '/router/about',
        component: about,
        routes: [
          {
            path: '/router/about/address',
            component: address,
          },
          {
            path: '/router/about/culture',
            component: culture,
          },
        ],
      },
      {
        path: '/router/article/:id',
        component: article,
      },
    ],
  },
]

export default routes
