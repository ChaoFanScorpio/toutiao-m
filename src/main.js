import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局样式
import './styles/index.less'
// 全局导入vant
import Vant from 'vant'
import 'vant/lib/index.css'

// 加载动态设置 REM 基准值
import 'amfe-flexible'

const app = createApp(App).use(store).use(router)
// app.use(Vant)
app.use(Vant)
// 挂载到#app
app.mount('#app')
