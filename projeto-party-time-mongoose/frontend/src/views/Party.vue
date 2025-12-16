<template>
  <div class="party">
    <!-- Título do evento -->
    <h1>{{ party.title }}</h1>

    <div class="party-container">
      <!-- Área de imagens da festa -->
      <div class="party-images" v-if="party.photos">
        <!-- Imagem principal -->
        <div
          class="main-image"
          :style="{'background-image': 'url(' + party.photos[0] +')'}"
        ></div>

        <!-- Miniaturas das demais imagens -->
        <div class="party-mini-images" v-if="party.photos[1]">
          <div
            class="mini-image"
            v-for="(photo, index) in party.photos"
            :key="index"
            :style="{'background-image': 'url(' + party.photos[index] +')'}"
          ></div>
        </div>
      </div>

      <!-- Detalhes do evento -->
      <div class="party-details">
        <p class="bold">Descrição da festa:</p>
        <p class="party-description">{{ party.description }}</p>

        <p class="bold">Data da festa:</p>
        <p class="party-date">{{ party.partyDate }}</p>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Party",
    data() {
        return {
          // Objeto da festa carregado da API
          party: {},
        }
    },
    created() {
        // Carrega os dados da festa ao entrar na página
        this.getParty();
    },
    methods: {
        async getParty() {

            // Obtém o ID da festa pela URL
            const id = this.$route.params.id;

            // Token armazenado no Vuex (se existir)
            const token = this.$store.getters.token;

            await fetch(`http://localhost:3000/api/party/${id}`, {
                method: "GET",
                headers: { 
                    "Content-type": "application/json",
                    "auth-token": token 
                }
            })
            .then((resp) => resp.json())
            .then((data) => {

                // Armazena os dados da festa
                this.party = data.party;

                // Formata a data para o padrão local
                this.party.partyDate = new Date(this.party.partyDate).toLocaleDateString();

                // Ajusta o caminho das imagens para acesso público
                this.party.photos.forEach((photo, index) => {
                  this.party.photos[index] = photo
                    .replace("public", "http://localhost:3000")
                    .replaceAll("\\", "/");
                });

            })
            .catch((err) => {
                console.log(err);
            })

        }
    }
}
</script>

<style scoped>
    /* Container principal da página */
    .party {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
        width: 1000px;
        margin: 0 auto;
    }

    .party h1 {
        margin-bottom: 40px;
    }

    /* Layout principal */
    .party-container {
      display: flex;
    }

    /* Área de imagens */
    .party-images {
      width: 380px;
      margin-right: 30px;
    }

    /* Imagem principal */
    .main-image {
      width: 100%;
      height: 200px;
      background-color: #CCC;
      margin-bottom: 15px;
      background-position: center;
      background-size: cover;
    }

    /* Miniaturas */
    .party-mini-images {
      display: flex;
      flex-wrap: wrap;
    }

    .mini-image {
      width: 80px;
      height: 80px;
      margin-right: 15px;
      background-color: #CCC;
      margin-bottom: 15px;
      background-position: center;
      background-size: cover;
    }

    /* Área de detalhes */
    .party-details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .bold {
      font-weight: bold;
      margin-bottom: 12px;
    }

    .party-description,
    .party-date {
      margin-bottom: 20px;
    }
</style>
