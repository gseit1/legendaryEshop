import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Google Fonts
const link = document.createElement('link')
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap'
link.rel = 'stylesheet'
document.head.appendChild(link)

const app = createApp(App)
app.use(router)
app.mount('#app')
