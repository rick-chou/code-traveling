import { createRouter, createWebHashHistory } from 'vue-router'

// 路由懒加载

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'

import Users from '../components/user/Users.vue'

import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'

import GoodsList from '../components/goods/List.vue'
import Add from '../components/goods/Add.vue'

import Order from '../components/order/Order.vue'
import Report from '../components/report/Report.vue'

const routes = [
  // 重定向
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/users',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: Users },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
      { path: '/goods', component: GoodsList },
      { path: '/goods/add', component: Add },
      { path: '/orders', component: Order },
      { path: '/reports', component: Report },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
