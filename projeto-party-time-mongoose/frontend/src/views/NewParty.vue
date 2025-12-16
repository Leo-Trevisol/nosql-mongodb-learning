<template>
  <div class="newparty">
    <!-- Título da página de criação de festa -->
    <h1>Adicione a sua festa:</h1>

    <!-- 
      Componente de formulário reutilizável.
      - party: objeto vazio, pois é uma nova festa
      - page: define o comportamento do formulário (criação)
      - btnText: texto exibido no botão de envio
    -->
    <PartyForm :party="{}" page="newparty" btnText="Criar Festa!" />
  </div>
</template>

<script>
import PartyForm from '../components/PartyForm.vue'

export default {
    name: "NewParty",
    components: {
        PartyForm
    }
}
</script>

<style scoped>
    /* Container principal da página */
    .newparty {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    /* Espaçamento do título */
    .newparty h1 {
        margin-bottom: 40px;
    }
</style>
