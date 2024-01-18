import { createApp } from 'vue'
import { createPinia } from 'pinia'
<<<<<<< HEAD
=======

>>>>>>> 50feaf39c9ce5cc9d1ffe96ea9cb6ddf6e128c77
import App from './App.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
<<<<<<< HEAD
=======

>>>>>>> 50feaf39c9ce5cc9d1ffe96ea9cb6ddf6e128c77
app.mount('#app')
