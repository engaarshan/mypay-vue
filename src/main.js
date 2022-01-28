import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "../src/assets/tailwinds.css"
import BackToTop from 'vue-backtotop';

const feather = require('feather-icons');
feather.replace();

createApp(App).use(store).use(BackToTop).use(router).mount('#app')
