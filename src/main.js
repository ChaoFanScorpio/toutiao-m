import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局样式
import './styles/index.less'
// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App).use(store).use(router)
// app.use(Vant)
app.use(Vant)
app.mount('#app')
