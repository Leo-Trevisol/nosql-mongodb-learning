<template>
  <div class="dashboard">
    <div class="title-container">
        <!-- Título da área do usuário -->
        <h1>Gerencie seus eventos</h1>

        <!-- Navegação para cadastro de uma nova festa -->
        <router-link to="/newparty" class="btn">Cadastrar Festa</router-link>
    </div>

    <!-- Exibe a tabela se o usuário tiver festas cadastradas -->
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
            // Lista de festas do usuário logado
            parties: []
        }
    },
    methods: {
        async getParties() {

            // Recupera o token JWT armazenado no Vuex
            const token = this.$store.getters.token;

            // Requisição para buscar as festas do usuário autenticado
            await fetch("http://localhost:3000/api/party/userparties", {
                method: "GET",
                headers: { 
                    "Content-type": "application/json",
                    "auth-token": token
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                // Atualiza o estado com as festas retornadas pela API
                this.parties = data.parties;
            })
            .catch((err) => {
                console.log(err);
            })
        
        }
    },
    created() {
        // Carrega as festas assim que a view é criada
        this.getParties();
    },
}
</script>

<style scoped>
    /* Estilização específica da dashboard */
    .dashboard {
        padding: 50px;
        padding-bottom: 100px;
    }

    .title-container {
        display: flex;        
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    }
    
    /* Botão padrão de ação */
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
