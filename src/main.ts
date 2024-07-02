import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'

// 导入重置样式
// import './styles/reset.css'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
// app.use(router)

app.mount('#app')
