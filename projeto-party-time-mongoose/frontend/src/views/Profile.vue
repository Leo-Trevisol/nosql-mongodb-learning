<template>
  <div class="profile">
    <!-- Título da página -->
    <h1>Edite seu perfil</h1>

    <!-- Formulário de edição do usuário -->
    <UserForm
      page="profile"
      :user="user"
      btnText="Editar"
      :key="componentKey"
    />
  </div>
</template>

<script>
import UserForm from '../components/UserForm'

export default {
    name: "Profile",
    components: {
        UserForm
    },
    data() {
        return {
            // Dados do usuário carregados da API
            user: {},

            // Força o recarregamento do componente UserForm
            componentKey: 0
        }
    },
    created() {
        // Carrega os dados do usuário ao abrir a página
        this.getUser();
    },
    methods: {
        async getUser() {

            // Obtém o ID do usuário e o token armazenados no Vuex
            const id = this.$store.getters.userId;
            const token = this.$store.getters.token;

            await fetch(`http://localhost:3000/api/user/${id}`, {
                method: "GET",
                headers: { 
                    "Content-type": "application/json",
                    "auth-token": token 
                }
            })
            .then((resp) => resp.json())
            .then((data) => {

                // Atualiza os dados do usuário
                this.user = data.user;

                // Atualiza a key para garantir re-render do formulário
                this.componentKey += 1;

            })
            .catch((err) => {
                console.log(err);
            })

        }
    }
}
</script>

<style scoped>
    /* Container principal da página */
    .profile {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    .profile h1 {
        margin-bottom: 40px;
    }
</style>
