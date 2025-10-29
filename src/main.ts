import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'

// 导入重置样式
// import 'reset-css'
// import '@unocss/reset/normalize.css'
import '@unocss/reset/tailwind.css'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
// app.use(router)

app.mount('#app')
