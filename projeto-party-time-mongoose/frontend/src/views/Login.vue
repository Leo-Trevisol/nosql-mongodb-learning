<template>
  <div class="login">
    <!-- Título da página de autenticação -->
    <h1>Entrar no Party Time</h1>

    <!-- Componente responsável pelo formulário de login -->
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'

export default {
    components: {
        // Registro do formulário de login
        LoginForm
    }
}
</script>

<style scoped>
    /* Estilo da página de login */
    .login {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    .login h1 {
        margin-bottom: 40px;
    }
</style>
