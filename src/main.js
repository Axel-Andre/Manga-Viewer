import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './assets/style/main.css'


const app = createApp(App).use(router);
app.use(router);
app.mount('#app')
