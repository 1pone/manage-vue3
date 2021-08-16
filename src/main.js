import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import axios from 'axios'
import config from './config'

console.log(import.meta.env);

axios.get(config.mockApi+'/login').then(res=>{
    console.log(res.data);
})

const app = createApp(App)

app.use(router).use(ElementPlus).mount('#app')
