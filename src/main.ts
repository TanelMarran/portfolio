import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import appear from './directives/appear'

const app = createApp(App)

app.use(router)

/* Directives */

app.directive('appear', appear)

app.mount('#app')
