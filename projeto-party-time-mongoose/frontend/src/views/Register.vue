<template>
  <div class="register">
    <!-- Título da página -->
    <h1>Criar uma conta</h1>

    <!-- Formulário reutilizável para cadastro de usuário -->
    <!-- user vazio pois é um novo registro -->
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
    components: {
        UserForm
    }
}
</script>

<style scoped>
.register {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 100px;
}

.register h1 {
    margin-bottom: 40px;
}
</style>
