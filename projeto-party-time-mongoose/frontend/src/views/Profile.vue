<template>
  <div class="profile">
    <!-- Título da página -->
    <h1>Edite seu perfil</h1>

    <!-- Formulário reutilizável para edição de usuário -->
    <!-- key força o re-render quando os dados do usuário são carregados -->
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
    components: {
        UserForm
    },

    data() {
        return {
            // Dados do usuário autenticado
            user: {},

            // Usado para forçar a atualização do componente UserForm
            componentKey: 0
        }
    },

    created() {
        // Carrega os dados do usuário ao entrar na página
        this.getUser()
    },

    methods: {
        async getUser() {

            // ID e token obtidos do Vuex (estado global)
            const id = this.$store.getters.userId
            const token = this.$store.getters.token

            await fetch(`http://localhost:3000/api/user/${id}`, {
                method: "GET",
                headers: { 
                    "Content-type": "application/json",
                    "auth-token": token 
                }
            })
            .then(resp => resp.json())
            .then(data => {

                // Dados retornados da API
                this.user = data.user

                // Força a re-renderização do formulário com os dados carregados
                this.componentKey += 1
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
.profile {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 100px;
}

.profile h1 {
    margin-bottom: 40px;
}
</style>
