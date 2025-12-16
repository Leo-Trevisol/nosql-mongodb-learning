<template>
  <div>
    <!-- Componente de mensagem para feedback (erro ou sucesso) -->
    <Message :msg="msg" :msgClass="msgClass" />

    <!-- 
      Formulário de criação ou edição de festa
      - newparty → cria
      - editparty → atualiza
    -->
    <form
      id="register-form"
      enctype="multipart/form-data"
      @submit="page === 'newparty' ? createParty($event) : update($event)"
    >
      <!-- Campos ocultos usados na edição -->
      <input type="hidden" id="id" name="id" v-model="id">
      <input type="hidden" id="user_id" name="user_id" v-model="user_id">

      <!-- Título do evento -->
      <div class="input-container">
        <label for="title">Título do Evento:</label>
        <input
          type="text"
          id="title"
          name="title"
          v-model="title"
          placeholder="Digite o título"
        >
      </div>

      <!-- Descrição do evento -->
      <div class="input-container">
        <label for="description">Descrição:</label>
        <textarea
          id="description"
          name="description"
          v-model="description"
          placeholder="O que vai acontecer ou o que já aconteceu?"
        ></textarea>
      </div>

      <!-- Data da festa -->
      <div class="input-container">
        <label for="party_date">Data da Festa:</label>
        <input
          type="date"
          id="party_date"
          name="party_date"
          v-model="party_date"
        >
      </div>

      <!-- Upload de imagens -->
      <div class="input-container">
        <label for="photos">Imagens:</label>
        <input
          type="file"
          multiple="multiple"
          id="photos"
          name="photos"
          ref="file"
          @change="onChange"
        >
      </div>

      <!-- Miniaturas das imagens atuais (somente edição) -->
      <div
        v-if="page === 'editparty' && showMiniImages"
        class="mini-images"
      >
        <p>Imagens atuais:</p>
        <img
          v-for="(photo, index) in photos"
          :src="photo"
          :key="index"
        >
      </div>

      <!-- Definição de privacidade -->
      <div class="input-container checkbox-container">
        <label for="privacy">Evento privado</label>
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          v-model="privacy"
        >
      </div>

      <!-- Botão de envio -->
      <InputSubmit :text="btnText" />
    </form>
  </div>
</template>

<script>
import InputSubmit from './form/InputSubmit'
import Message from './Message'

export default {
  // Componente responsável por criar e editar festas
  name: "RegisterForm",

  components: {
    InputSubmit,
    Message
  },

  // Props recebidas do componente pai
  props: ["party", "page", "btnText"],

  data() {
    return {
      // Dados da festa
      id: this.party._id || null,
      title: this.party.title || null,
      description: this.party.description || null,
      party_date: this.party.partyDate || null,
      photos: this.party.photos || null,
      privacy: this.party.privacy || false,
      user_id: this.party.userId || null,

      // Mensagens de feedback
      msg: null,
      msgClass: null,

      // Controle das miniaturas na edição
      showMiniImages: true,
    }
  },

  methods: {
    // Criação de nova festa
    async createParty(e) {
      e.preventDefault();

      const formData = new FormData();

      // Dados principais
      formData.append('title', this.title);
      formData.append('description', this.description);
      formData.append('party_date', this.party_date);
      formData.append('privacy', this.privacy);

      // Upload das imagens
      if (this.photos.length > 0) {
        for (const i of Object.keys(this.photos)) {
          formData.append('photos', this.photos[i])
        }
      }

      // Token de autenticação
      const token = this.$store.getters.token;

      await fetch("http://localhost:3000/api/party", {
        method: "POST",
        headers: {
          "auth-token": token
        },
        body: formData
      })
        .then((resp) => resp.json())
        .then((data) => {
          this.msg = data.error || data.msg;
          this.msgClass = data.error ? "error" : "success";

          setTimeout(() => {
            this.msg = null;

            // Redireciona após sucesso
            if (!data.error) {
              this.$router.push('dashboard');
            }
          }, 2000);
        })
        .catch((err) => console.log(err));
    },

    // Captura arquivos selecionados
    onChange(e) {
      this.photos = e.target.files;
      this.showMiniImages = false;
    },

    // Atualização de festa existente
    async update(e) {
      e.preventDefault();

      const formData = new FormData();

      // Dados da festa
      formData.append('id', this.id);
      formData.append('title', this.title);
      formData.append('description', this.description);
      formData.append('partyDate', this.party_date);
      formData.append('privacy', this.privacy);
      formData.append('user_id', this.user_id);

      // Upload de novas imagens
      if (this.photos.length > 0) {
        for (const i of Object.keys(this.photos)) {
          formData.append('photos', this.photos[i])
        }
      }

      // Token de autenticação
      const token = this.$store.getters.token;

      await fetch("http://localhost:3000/api/party", {
        method: "PUT",
        headers: {
          "auth-token": token
        },
        body: formData
      })
        .then((resp) => resp.json())
        .then((data) => {
          this.msg = data.error || data.msg;
          this.msgClass = data.error ? "error" : "success";
        })
        .catch((err) => console.log(err));

      // Limpa mensagem após alguns segundos
      setTimeout(() => {
        this.msg = null;
      }, 2000);
    }
  }
}
</script>
