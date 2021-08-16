import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import request from './utils/request'

const app = createApp(App)

app.config.globalProperties.$request = request // 重要！全局挂载对象
app.use(router).use(ElementPlus).mount('#app')
