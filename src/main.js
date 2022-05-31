import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import './index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store'

//http://192.168.0.100:8000/api/products
//https://cursos-prueba.tk/api/v2
axios.defaults.baseURL = "http://192.168.0.100:8000/api"

//axios.defaults.withCredentials = true;

const app = createApp(App)

 
app.use(VueAxios, axios);
app.use(store);
app.use(router)

app.mount('#app')
