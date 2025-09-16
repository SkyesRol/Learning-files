import { createApp } from 'vue'
import router from './router/index'
import { createPinia } from 'pinia'

import App from './App.vue'
import './style.css'
const pinia = createPinia();
// VUE 全家桶
createApp(App)
    .use(router) // SPA
    .use(pinia)
    .mount('#app')
