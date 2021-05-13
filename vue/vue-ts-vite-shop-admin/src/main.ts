import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// 导入字体图标
import '@assets/fonts/iconfont.css'
// 导入全局样式表
import '@assets/css/global.css'
import axios from '@utils/http'
import router from '@router/index'
import store from '@store/index'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.config.globalProperties.$http = axios
app.mount('#app')
