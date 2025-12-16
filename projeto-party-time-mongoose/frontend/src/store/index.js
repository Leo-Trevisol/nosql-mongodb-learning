import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

// Plugin para persistir o estado do Vuex no localStorage
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  // Estado global da aplicação
  state() {
    return {
      authenticated: false, // Indica se o usuário está logado
      token: null,          // Token JWT de autenticação
      userId: null          // ID do usuário autenticado
    }
  },

  // Mutations: alteram diretamente o estado
  mutations: {
    // Realiza login do usuário
    authenticate(state, data) {
      state.authenticated = true
      state.token = data.token
      state.userId = data.userId
    },

    // Realiza logout e limpa os dados
    logout(state) {
      state.authenticated = false
      state.token = null
      state.userId = null
    },
  },

  // Getters: acesso controlado ao estado
  getters: {
    authenticated: state => state.authenticated,
    token: state => state.token,
    userId: state => state.userId
  },

  // Plugins do Vuex (persistência de dados)
  plugins: [vuexLocal.plugin]
})
