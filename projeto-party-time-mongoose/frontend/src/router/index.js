import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

// Definição das rotas da aplicação
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      // Página pública
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    // Lazy loading da view de login
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    // Lazy loading da view de cadastro
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    // Página protegida (usuário logado)
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // Dashboard do usuário autenticado
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/newparty',
    name: 'NewParty',
    // Criação de nova festa
    component: () => import(/* webpackChunkName: "newparty" */ '../views/NewParty.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editparty/:id',
    name: 'Edit Party',
    // Edição de festa existente (recebe ID por parâmetro)
    component: () => import(/* webpackChunkName: "editparty" */ '../views/EditParty.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/party/:id',
    name: 'Party',
    // Visualização pública da festa
    component: () => import(/* webpackChunkName: "party" */ '../views/Party.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

// Criação do router com histórico HTML5
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Guarda de navegação global
// Verifica se a rota exige autenticação
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Usuário não autenticado
    if (store.getters.authenticated === false) {
      next({
        path: '/login',
        // Guarda a rota original para possível redirecionamento
        params: { nextUrl: to.fullPath }
      })
    } else {
      // Usuário autenticado
      next()
    }
  } else {
    // Rota pública
    next()
  }
})

export default router
