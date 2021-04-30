import hook from './hook'
import router from './router'
import performance from './performance'


const routes = [
  ...hook,
  ...router,
  ...performance
]

export default routes
