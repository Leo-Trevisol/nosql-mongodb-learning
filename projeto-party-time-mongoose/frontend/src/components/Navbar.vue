<template>
  <!-- Barra de navegação principal -->
  <div id="nav">
    
    <!-- Logo que redireciona para a página inicial -->
    <router-link to="/" id="logo-container">
      <img src="/img/partytimelogo.png" alt="Party Time">
    </router-link>    

    <!-- Título da aplicação -->
    <h2 id="nav-title">Party Time</h2>

    <!-- Links de navegação -->
    <div id="nav-links">
      <router-link to="/">Festas</router-link>

      <!-- Links visíveis apenas quando NÃO autenticado -->
      <router-link to="/login" v-show="!authenticated">Entrar</router-link>
      <router-link to="/register" v-show="!authenticated">Cadastrar</router-link>

      <!-- Links visíveis apenas quando autenticado -->
      <router-link to="/dashboard" v-show="authenticated">Dashboard</router-link>
      <router-link to="/profile" v-show="authenticated">Configurações</router-link>

      <!-- Botão de logout -->
      <button @click="logout($event)" v-show="authenticated">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {  
  // Componente responsável pela navegação do sistema
  name: "Navbar",

  data () {
    return {
      // Nenhum estado local necessário
    }
  },

  methods: {
    // Realiza o logout do usuário
    logout(e) {
      e.preventDefault();

      // Remove autenticação do Vuex
      this.$store.commit("logout");

      // Redireciona para a home
      this.$router.push("/");
    }
  },

  computed: {
    // Estado global que indica se o usuário está autenticado
    ...mapState([
      'authenticated',
    ])
  }
}
</script>

<style scoped>
  /* Container principal da navbar */
  #nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #eee;
  }

  /* Estilo dos links */
  #nav a {
    text-decoration: none;
    margin-right: 15px;
  }

  /* Logo */
  #nav img {
    width: 35px;
  }

  /* Título */
  #nav-title {
    font-size: 3rem;
    font-weight: 300;
  }

  /* Containers laterais */
  #logo-container,
  #nav-links {
    width: 400px;
  }

  /* Alinhamento dos links */
  #nav-links {
    display: flex;
    justify-content: flex-end;
  }

  /* Botão de logout */
  button {
    background-color: #FFF;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    color: #c1b696;
  }
</style>
