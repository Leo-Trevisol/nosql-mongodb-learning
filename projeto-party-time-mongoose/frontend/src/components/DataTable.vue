<template>
  <div class="data-container">

      <!-- Componente para exibir mensagens de sucesso/erro -->
      <Message :msg="msg" :msgClass="msgClass" />

      <!-- Cabeçalho da tabela -->
      <div class="data-table-heading">
          <div class="data-id-heading">Nº:</div>
          <div class="data-title-heading">Nome da Festa:</div>
          <div class="data-actions-heading">Ações:</div>
      </div>

      <!-- Corpo da tabela -->
      <div class="data-table-body">
        
        <!-- Linha gerada para cada festa -->
        <div class="data-row" v-for="(party, index) in parties" :key="party._id">
            <div class="data-id-container">{{ index + 1 }}</div>

            <!-- Link para a página pública da festa -->
            <div class="data-title-container">
                <router-link :to="`/party/${party._id}`">
                  {{ party.title }}
                </router-link>
            </div>

            <!-- Ações disponíveis para o usuário -->
            <div class="data-actions-container">
                <router-link :to="`/editparty/${party._id}`" class="edit-btn">
                  Editar
                </router-link>
                <button class="remove-btn" @click="remove(party._id)">
                  Remover
                </button>
            </div>
        </div>

      </div>
  </div>
</template>

<script>
import Message from './Message';

export default {
  // Componente responsável por listar e gerenciar festas do usuário
  name: "DataTable",

  // Lista de festas recebida do componente pai
  props: ["parties"],

  components: {
    Message
  },

  data() {
      return {
        // Mensagem de feedback (sucesso ou erro)
        msg: null,
        msgClass: null,
      }
  },

  methods: {
    async remove(id) {

        // Recupera token e usuário autenticado do Vuex
        const userId = this.$store.getters.userId;
        const token = this.$store.getters.token;

        // Dados enviados para exclusão da festa
        const data = {
            id: id,
            userId: userId
        }

        const jsonData = JSON.stringify(data);

        // Requisição para remover a festa
        await fetch(`http://localhost:3000/api/party`, {
            method: "DELETE",
            headers: { 
                "Content-type": "application/json",
                "auth-token": token 
            },
            body: jsonData
        })
        .then((resp) => resp.json())
        .then((data) => {

            // Exibe feedback ao usuário
            if(data.error) {
                this.msg = data.error;
                this.msgClass = "error";
            } else {
                this.msg = data.msg;
                this.msgClass = "success";
            }

            // Limpa mensagem e recarrega lista
            setTimeout(() => {
                this.msg = null;  
                this.$parent.getParties();
            }, 1000);

        })
        .catch((err) => {
            console.log(err);
        })
        
    }
  }
}
</script>

<style scoped>
    /* Estrutura base da tabela */
    .data-table-heading, .data-row {
        display: flex;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid #CCC;
    }

    .data-table-heading div, .data-row div {
        flex: 1 1 0;
    } 

    .data-id-heading, .data-id-container {
        max-width: 50px
    }

    /* Botões de ação */
    .edit-btn, .remove-btn {
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

    .edit-btn {
        background-color: #007bff;
    }

    .edit-btn:hover {
        background-color: #0069d9;
    }

    .remove-btn {
        background-color: #dc3545;
    }

    .remove-btn:hover {
        background-color: #c82333;
    }
</style>
