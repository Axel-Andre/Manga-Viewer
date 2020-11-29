import { createApp } from 'vue'
import {router} from './config'
import App from './App.vue'
import './assets/style/main.css'


const app = createApp(App, {});
app.use(router);
app.mount('#app')
