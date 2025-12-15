<template>
  <!-- Exibe mensagem somente quando existir conteúdo -->
  <p class="msg" :class="msgClass" v-if="msg">
    {{ msg }}
  </p>
</template>

<script>
export default {
  // Componente genérico para feedback visual (erro/sucesso)
  name: "Message",

  // Props controladas pelo componente pai
  props: [
    // Texto da mensagem
    "msg",

    // Classe CSS que define o tipo da mensagem (error | success)
    "msgClass"
  ]
}
</script>

<style scoped>
  /* Estilo base da mensagem */
  .msg {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    border: 1px solid #CCC;
    border-radius: 5px;
  }

  /* Estilo para mensagens de erro */
  .error {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }

  /* Estilo para mensagens de sucesso */
  .success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
</style>
