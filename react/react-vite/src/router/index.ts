import classComponents from './class'
import hook from './hook'
import router from './router'
import performance from './performance'
import store from './store'


const routes = [
  ...classComponents,
  ...hook,
  ...router,
  ...performance,
  ...store
]

export default routes
