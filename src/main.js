import { createApp } from 'vue';
import App from './App.vue';
import '@popperjs/core';
import 'bootstrap';
import './assets/bootstrap.min.css';
import router from './router';


createApp(App).use(router).mount('#app')
