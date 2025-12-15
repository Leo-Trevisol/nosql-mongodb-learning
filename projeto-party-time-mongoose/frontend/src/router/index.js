// Importa as funções principais do Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// Importa a Home diretamente (rota principal)
import Home from '../views/Home.vue'

// Importa a store do Vuex para verificar autenticação
import store from '../store/index'

// Definição das rotas da aplicação
const routes = [
  {
    path: '/',                     // URL raiz
    name: 'Home',                  // Nome da rota
    component: Home,               // Componente associado
    meta: {
      requiresAuth: false          // Não exige autenticação
    }
  },
  {
    path: '/login',
    name: 'Login',
    // Lazy loading para melhorar performance
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: {
      requiresAuth: true           // Rota protegida
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/newparty',
    name: 'NewParty',
    component: () => import(/* webpackChunkName: "newparty" */ '../views/NewParty.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editparty/:id',        // Parâmetro dinâmico (id da festa)
    name: 'Edit Party',
    component: () => import(/* webpackChunkName: "editparty" */ '../views/EditParty.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/party/:id',            // Página pública de visualização da festa
    name: 'Party',
    component: () => import(/* webpackChunkName: "party" */ '../views/Party.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

// Criação do router com histórico baseado em URL (sem #)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Navigation Guard global
// Executado antes de cada mudança de rota
router.beforeEach((to, from, next) => {

  // Verifica se a rota acessada exige autenticação
  if (to.matched.some(record => record.meta.requiresAuth)) {

    // Se o usuário NÃO estiver autenticado
    if (store.getters.authenticated === false) {

      // Redireciona para a página de login
      next({
        path: '/login',
        params: { nextUrl: to.fullPath } // Guarda a rota original
      })

    } else {
      // Usuário autenticado → acesso permitido
      next()
    }

  } else {
    // Rota pública → acesso liberado
    next()
  }
})

// Exporta o router para uso na aplicação
export default router
