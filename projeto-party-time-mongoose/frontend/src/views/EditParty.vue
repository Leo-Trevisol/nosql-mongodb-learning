<template>
  <div class="editparty">
    <!-- Título da página de edição -->
    <h1>Edite a sua festa:</h1>

    <!-- Formulário reutilizável para edição da festa -->
    <PartyForm
      :party="party"
      page="editparty"
      btnText="Editar Festa"
      :key="componentKey"
    />
  </div>
</template>

<script>
import PartyForm from '../components/PartyForm.vue'

export default {
    components: {
        PartyForm
    },
    data() {
        return {
            // Dados da festa a ser editada
            party: {},

            // Força o re-render do componente após carregar os dados
            componentKey: 0
        }
    },
    created() {
        // Carrega os dados da festa ao entrar na página
        this.getParty();
    },
    methods: {
        async getParty() {

            // Recupera o ID da festa pela rota e o token pelo Vuex
            const id = this.$route.params.id;
            const token = this.$store.getters.token;

            // Requisição para buscar a festa do usuário autenticado
            await fetch(`http://localhost:3000/api/party/userparty/${id}`, {
                method: "GET",
                headers: { 
                    "Content-type": "application/json",
                    "auth-token": token 
                }
            })
            .then((resp) => resp.json())
            .then((data) => {

                // Popula o objeto da festa
                this.party = data.party;

                // Ajusta a data para o formato aceito pelo input type="date"
                this.party.partyDate = this.party.partyDate.substring(0, 10)

                // Ajusta o caminho das imagens para acesso via URL
                this.party.photos.forEach((photo, index) => {
                    this.party.photos[index] = photo.replace("public", "http://localhost:3000");
                });

                // Força atualização do PartyForm com os novos dados
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
    /* Estilo da página de edição */
    .editparty {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    .editparty h1 {
        margin-bottom: 40px;
    }
</style>
