<template>
  <div class="data-container">
      <!-- Exibe mensagens de sucesso ou erro -->
      <Message :msg="msg" :msgClass="msgClass" />

      <!-- Cabeçalho da tabela -->
      <div class="data-table-heading">
          <div class="data-id-heading">Nº:</div>
          <div class="data-title-heading">Nome da Festa:</div>
          <div class="data-actions-heading">Ações:</div>
      </div>

      <!-- Corpo da tabela -->
      <div class="data-table-body">
        <div class="data-row" v-for="(party, index) in parties" :key="party._id">
            <!-- Índice da festa -->
            <div class="data-id-container">{{ index + 1 }}</div>

            <!-- Link para visualização da festa -->
            <div class="data-title-container">
                <router-link :to="`/party/${party._id}`">
                    {{ party.title }}
                </router-link>
            </div>

            <!-- Ações disponíveis -->
            <div class="data-actions-container">
                <router-link
                  :to="`/editparty/${party._id}`"
                  class="edit-btn"
                >
                  Editar
                </router-link>

                <button
                  class="remove-btn"
                  @click="remove(party._id)"
                >
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
  // Componente responsável por listar festas em formato de tabela
  name: "Footer",

  // Lista de festas recebida do componente pai
  props: ["parties"],

  components: {
    Message
  },

  data() {
      return {
        msg: null,       // Mensagem exibida ao usuário
        msgClass: null, // Classe CSS da mensagem (success | error)
      }
  },

  methods: {
    async remove(id) {

        // Obtém usuário e token do Vuex
        const userId = this.$store.getters.userId;
        const token = this.$store.getters.token;

        // Dados enviados para remoção da festa
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

            // Define mensagem de retorno
            if(data.error) {
                this.msg = data.error;
                this.msgClass = "error";
            } else {
                this.msg = data.msg;
                this.msgClass = "success";
            }

            setTimeout(() => {
                this.msg = null;

                // Atualiza a lista de festas
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
    /* Layout da tabela */
    .data-table-heading,
    .data-row {
        display: flex;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid #CCC;
    }

    .data-table-heading div,
    .data-row div {
        flex: 1 1 0;
    } 

    /* Coluna de índice */
    .data-id-heading,
    .data-id-container {
        max-width: 50px
    }

    /* Botões de ação */
    .edit-btn,
    .remove-btn {
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

    /* Botão editar */
    .edit-btn {
        background-color: #007bff;
    }

    .edit-btn:hover {
        background-color: #0069d9;
    }

    /* Botão remover */
    .remove-btn {
        background-color: #dc3545;
    }

    .remove-btn:hover {
        background-color: #c82333;
    }
</style>
