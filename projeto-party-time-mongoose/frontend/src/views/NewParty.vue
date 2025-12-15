<template>
  <div class="newparty">
    <!-- Título da página de criação -->
    <h1>Adicione a sua festa:</h1>

    <!-- Formulário reutilizável para cadastro de uma nova festa -->
    <PartyForm
      :party="{}"
      page="newparty"
      btnText="Criar Festa!"
    />
  </div>
</template>

<script>
import PartyForm from '../components/PartyForm.vue'

export default {
    components: {
        // Componente responsável por criar a festa
        PartyForm
    }
}
</script>

<style scoped>
    /* Estilo da página de criação de festas */
    .newparty {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    .newparty h1 {
        margin-bottom: 40px;
    }
</style>
