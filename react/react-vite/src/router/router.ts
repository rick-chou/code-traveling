import router from '@containers/Router'
import home from '@containers/Router/Home'
import about from '@containers/Router/About'
import address from '@containers/Router/About/Address'
import culture from '@containers/Router/About/Culture'
import article from '@containers/Router/Article'

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
