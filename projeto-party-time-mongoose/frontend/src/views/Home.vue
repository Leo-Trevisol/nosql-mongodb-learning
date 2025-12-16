<template>
  <div class="home">
    <!-- Título da página inicial -->
    <h1>Veja as últimas festas</h1>

    <!-- Lista de festas públicas -->
    <div class="parties-container">
        <div
          v-for="(party, index) in parties"
          :key="index"
          class="party-container"
        >
            <!-- Imagem da festa (primeira foto) -->
            <div
              class="party-img"
              :style="{'background-image': 'url(' + party.photos[0] +')'}"
            ></div>

            <!-- Título com link para os detalhes da festa -->
            <router-link
              :to="`/party/${party._id}`"
              class="party-title"
            >
              {{ party.title }}
            </router-link>

            <!-- Data da festa -->
            <p class="party-date">Data: {{ party.partyDate }}</p>

            <!-- Botão para acessar os detalhes -->
            <router-link
              :to="`/party/${party._id}`"
              class="party-details-btn"
            >
              Ver Mais
            </router-link>
        </div>        
    </div>

    <!-- Mensagem exibida quando não há festas -->
    <p v-if="parties.length == 0">Não há festas ainda...</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            parties: [] // Lista de festas públicas
        }
    },
    created() {
        // Carrega as festas públicas ao iniciar o componente
        this.getParties();
    },
    methods: {
        // Busca todas as festas públicas no backend
        async getParties() {

            await fetch(`http://localhost:3000/api/party/all`, {
                method: "GET",
                headers: { 
                    "Content-type": "application/json"
                }
            })
            .then((resp) => resp.json())
            .then((data) => {

                // Ajusta os dados recebidos do backend
                data.parties.forEach((party) => {

                    // Formata a data para o padrão local
                    if(party.partyDate) {
                        party.partyDate =
                          new Date(party.partyDate).toLocaleDateString();
                    }

                    // Ajusta o caminho das imagens para URL completa
                    party.photos.forEach((photo, index) => {
                        party.photos[index] =
                          photo
                            .replace("public", "http://localhost:3000")
                            .replaceAll("\\", "/");
                    });

                });

                // Atualiza a lista de festas
                this.parties = data.parties;

            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>

    /* Container principal */
    .home {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    .home h1 {
        margin-bottom: 40px;
    }

    /* Container das festas */
    .parties-container {
        display: flex;
        flex-wrap: wrap;
        max-width: 1000px;
        margin: 0 auto;
    }

    /* Card individual da festa */
    .party-container {
        width: 30.3%;
        margin: 1.5%;
        display: flex;
        flex-direction: column;
    }

    /* Imagem da festa */
    .party-img {
        width: 100%;
        height: 200px;
        margin-bottom: 12px;
        background-position: center;
        background-size: cover;
    }

    /* Título da festa */
    .party-title {
        color: #25282e;
        text-decoration: none;
        margin-bottom: 12px;
    }

    /* Data da festa */
    .party-date {
        color: #777;
        margin-bottom: 12px;
    }

    /* Botão de detalhes */
    .party-details-btn {
        width: 100%;
        text-transform: uppercase;
        color: #fff;
        background-color: #25282e;
        transition: .5s;
        border: 0;
        padding: 12px;
        text-decoration: none;
        text-align: center;
    }

    .party-details-btn:hover {
        background-color: #141619;
    }

</style>
