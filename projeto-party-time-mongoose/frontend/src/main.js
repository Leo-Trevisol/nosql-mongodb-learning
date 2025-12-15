import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

// Cria a aplicação Vue a partir do componente raiz (App.vue)
// e registra o sistema de rotas
const app = createApp(App).use(router)

// Registra o Vuex (store global de estado)
app.use(store)

// Monta a aplicação no elemento #app do index.html
app.mount('#app')
