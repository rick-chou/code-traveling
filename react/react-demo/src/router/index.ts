import Antd from '@containers/Antd'
import Demo from '@containers/Demo'
import Echarts from '@containers/Echarts'
import Antv from '@containers/Antv'
import Bizcharts from '@containers/Bizcharts'

const routes = [
  {
    path: '/antd',
    component: Antd,
  },
  {
    path: '/demo',
    component: Demo,
  },
  {
    path: '/echarts',
    component: Echarts,
  },
  {
    path: '/antv',
    component: Antv,
  },
  {
    path: '/bizcharts',
    component: Bizcharts,
  },
]

export default routes
