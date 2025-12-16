<template>
  <div class="editparty">
    <!-- Título da página -->
    <h1>Edite a sua festa:</h1>

    <!-- Formulário reutilizado para edição da festa -->
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
            party: {},           // Dados da festa carregada
            componentKey: 0      // Força a recriação do componente PartyForm
        }
    },
    created() {
        // Carrega os dados da festa ao criar o componente
        this.getParty();
    },
    methods: {
        // Busca os dados da festa do usuário pelo ID
        async getParty() {

            // Recupera o ID da URL e o token do Vuex
            const id = this.$route.params.id;
            const token = this.$store.getters.token;

            await fetch(`http://localhost:3000/api/party/userparty/${id}`, {
                method: "GET",
                headers: { 
                    "Content-type": "application/json",
                    "auth-token": token 
                }
            })
            .then((resp) => resp.json())
            .then((data) => {

                // Atribui os dados da festa
                this.party = data.party;

                // Ajusta o formato da data para input type="date"
                this.party.partyDate = this.party.partyDate.substring(0, 10)

                // Ajusta o caminho das imagens para URL completa
                this.party.photos.forEach((photo, index) => {
                    this.party.photos[index] =
                        photo.replace("public", "http://localhost:3000");
                });

                // Força a atualização do PartyForm
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
    .editparty {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    /* Espaçamento do título */
    .editparty h1 {
        margin-bottom: 40px;
    }
</style>
