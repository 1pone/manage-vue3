import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import request from './utils/request'
import storage from './utils/storage'

const app = createApp(App)

app.config.globalProperties.$request = request // 重要！全局挂载axios封装对象
app.config.globalProperties.$storage = storage // 全局挂载localStorage封装对象
app.use(router).use(ElementPlus).mount('#app')
