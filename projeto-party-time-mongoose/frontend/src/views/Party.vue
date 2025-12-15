<template>
  <div class="party">
    <!-- Título da festa -->
    <h1>{{ party.title }}</h1>

    <div class="party-container">
      <!-- Imagens da festa -->
      <div class="party-images" v-if="party.photos">
        <!-- Imagem principal -->
        <div
          class="main-image"
          :style="{'background-image': 'url(' + party.photos[0] + ')'}">
        </div>

        <!-- Miniaturas -->
        <div class="party-mini-images" v-if="party.photos[1]">
          <div
            class="mini-image"
            v-for="(photo, index) in party.photos"
            :key="index"
            :style="{'background-image': 'url(' + party.photos[index] + ')'}">
          </div>
        </div>
      </div>

      <!-- Detalhes textuais -->
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
    data() {
        return {
            party: {}
        }
    },

    created() {
        // Carrega os dados da festa ao entrar na página
        this.getParty()
    },

    methods: {
        async getParty() {

            // ID da festa vindo da URL
            const id = this.$route.params.id

            // Token do usuário (se autenticado)
            const token = this.$store.getters.token

            await fetch(`http://localhost:3000/api/party/${id}`, {
                method: "GET",
                headers: { 
                    "Content-type": "application/json",
                    "auth-token": token 
                }
            })
            .then(resp => resp.json())
            .then(data => {

                // Dados da festa
                this.party = data.party

                // Formata a data para pt-BR
                this.party.partyDate = new Date(this.party.partyDate).toLocaleDateString()

                // Ajusta o caminho das imagens para o servidor
                this.party.photos.forEach((photo, index) => {
                    this.party.photos[index] =
                        photo
                          .replace("public", "http://localhost:3000")
                          .replaceAll("\\", "/")
                })
            })
            .catch(err => console.log(err))
        }
    }
}
</script>
<style scoped>
.party {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 100px;
    width: 1000px;
    margin: 0 auto;
}

.party-container {
    display: flex;
}

.party-images {
    width: 380px;
    margin-right: 30px;
}

.main-image {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
    margin-bottom: 15px;
}

.party-mini-images {
    display: flex;
    flex-wrap: wrap;
}

.mini-image {
    width: 80px;
    height: 80px;
    margin-right: 15px;
    margin-bottom: 15px;
    background-position: center;
    background-size: cover;
}

.party-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>
