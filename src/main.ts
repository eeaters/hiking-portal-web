import { createApp } from 'vue'
import './style/reset.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
import router from './route'

createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount('#app')
