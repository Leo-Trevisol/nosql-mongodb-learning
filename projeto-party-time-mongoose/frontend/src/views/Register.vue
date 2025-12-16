<template>
  <div class="register">
    <!-- Título da página -->
    <h1>Criar uma conta</h1>

    <!-- Formulário de cadastro de usuário -->
    <UserForm
      :user="{}"
      page="register"
      btnText="Cadastrar"
    />
  </div>
</template>

<script>
import UserForm from '../components/UserForm'

export default {
    name: "Register",
    components: {
        UserForm
    }
}
</script>

<style scoped>
    /* Container principal da página de registro */
    .register {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    .register h1 {
        margin-bottom: 40px;
    }
</style>
