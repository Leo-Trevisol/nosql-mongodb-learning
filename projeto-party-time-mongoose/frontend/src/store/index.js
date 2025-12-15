import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

// Plugin responsável por persistir o estado do Vuex no localStorage
// Permite manter o usuário logado mesmo após atualizar a página
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state() {
    return {
      // Indica se o usuário está autenticado
      authenticated: false,

      // Token JWT retornado pelo backend
      token: null,

      // ID do usuário autenticado
      userId: null
    }
  },
  mutations: {
    // Atualiza o estado após login ou registro
    authenticate(state, data) {
      state.authenticated = true
      state.token = data.token
      state.userId = data.userId
    },

    // Limpa os dados de autenticação (logout)
    logout(state) {
      state.authenticated = false
      state.token = null
      state.userId = null
    },
  },
  getters: {
    // Facilita o acesso ao estado nos componentes
    authenticated: state => state.authenticated,
    token: state => state.token,
    userId: state => state.userId
  },

  // Plugin que salva automaticamente o estado no localStorage
  plugins: [vuexLocal.plugin]
})
