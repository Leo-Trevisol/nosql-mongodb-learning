<template>
  <div class="login">
    <!-- Título da página de login -->
    <h1>Entrar no Party Time</h1>

    <!-- Componente responsável pelo formulário de login -->
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'

export default {
    name: "Login",
    components: {
        LoginForm
    }
}
</script>

<style scoped>
    /* Container principal da tela de login */
    .login {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    /* Espaçamento do título */
    .login h1 {
        margin-bottom: 40px;
    }
</style>
