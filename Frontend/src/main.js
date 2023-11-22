// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import bt from 'bootstrap/dist/js/bootstrap'

const app = createApp(App).use(bt)

app.use(router)

app.mount('#app')
