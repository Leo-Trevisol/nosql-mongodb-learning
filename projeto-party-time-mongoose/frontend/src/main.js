import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

// Cria a instância principal da aplicação Vue
const app = createApp(App)
  // Registra o Vue Router (rotas da aplicação)
  .use(router)

// Registra o Vuex (estado global)
app.use(store)

// Monta a aplicação no elemento #app do index.html
app.mount('#app')
