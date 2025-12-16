<template>
  <div class="dashboard">
    <!-- Título da página e botão para criar nova festa -->
    <div class="title-container">
        <h1>Gerencie seus eventos</h1>
        <router-link to="/newparty" class="btn">Cadastrar Festa</router-link>
    </div>

    <!-- Exibe a tabela caso existam festas cadastradas -->
    <div v-if="parties.length > 0">
        <DataTable :parties="parties" />
    </div>

    <!-- Mensagem exibida quando não há festas -->
    <div v-else>
        <p>
          Você ainda não tem festas cadastradas,
          <router-link to="/newparty">clique aqui para criar a sua festa!</router-link>
        </p>
    </div>
  </div>
</template>

<script>
import DataTable from '../components/DataTable'

export default {
    components: {
        DataTable
    },
    data() {
        return {
            parties: [] // Lista de festas do usuário
        }
    },
    methods: {
        // Busca as festas cadastradas pelo usuário logado
        async getParties() {

            // Recupera o token do Vuex
            const token = this.$store.getters.token;

            await fetch("http://localhost:3000/api/party/userparties", {
                method: "GET",
                headers: { 
                    "Content-type": "application/json",
                    "auth-token": token
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                // Atualiza a lista de festas
                this.parties = data.parties;
            })
            .catch((err) => {
                console.log(err);
            })
        }
    },
    created() {
        // Carrega as festas ao criar o componente
        this.getParties();
    },
}
</script>

<style scoped>
    .dashboard {
        padding: 50px;
        padding-bottom: 100px;
    }

    /* Container do título e botão */
    .title-container {
        display: flex;        
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    }
    
    /* Estilo do botão */
    .btn {
        padding: 10px 16px;
        background-color: #000;
        color: #FFF;
        margin: 5px;
        text-decoration: none;
        border: none;
        font-size: 14px;
        cursor: pointer;
        transition: .5s;
    }
</style>
