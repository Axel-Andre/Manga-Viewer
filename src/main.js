import { createApp } from 'vue'
import {router} from './config'
import App from './App.vue'
import './assets/style/main.css'
import store from './store'


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')