<template>
  <div>
    <!-- Exibe mensagens de erro ou sucesso -->
    <Message :msg="msg" :msgClass="msgClass" />

    <!-- 
      Formulário de usuário
      - register → cadastro
      - outro valor → atualização de perfil
    -->
    <form
      id="user-form"
      @submit="page === 'register' ? register($event) : update($event)"
    >
      <!-- ID oculto usado na edição -->
      <input type="hidden" id="id" name="id" v-model="id">

      <!-- Nome do usuário -->
      <div class="input-container">
        <label for="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="name"
          placeholder="Digite o seu nome"
        >
      </div>

      <!-- Email do usuário -->
      <div class="input-container">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          placeholder="Digite o seu e-mail"
        >
      </div>

      <!-- Senha -->
      <div class="input-container">
        <label for="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          placeholder="Digite sua senha"
        >
      </div>

      <!-- Confirmação da senha -->
      <div class="input-container">
        <label for="confirmpassword">Confirmação:</label>
        <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          v-model="confirmpassword"
          placeholder="Confirme sua senha"
        >
      </div>

      <!-- Botão de envio -->
      <InputSubmit :text="btnText" />
    </form>
  </div>
</template>

<script>
import InputSubmit from './form/InputSubmit'
import Message from './Message';

export default {
  // Componente responsável por cadastro e edição de usuário
  name: "RegisterForm",

  components: {
    InputSubmit,
    Message
  },

  // Dados recebidos do componente pai
  props: ["user", "page", "btnText"],

  data() {
    return {
      // Dados do usuário
      id: this.user._id || null,
      name: this.user.name || null,
      email: this.user.email || null,

      // Senhas não vêm preenchidas por segurança
      password: null,
      confirmpassword: null,

      // Mensagens de feedback
      msg: null,
      msgClass: null,
    }
  },

  methods: {
    // Cadastro de novo usuário
    async register(e) {
      e.preventDefault();

      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmpassword: this.confirmpassword
      }

      await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
      })
        .then((resp) => resp.json())
        .then((data) => {
          let auth = false;

          if (data.error) {
            this.msg = data.error;
            this.msgClass = "error";
          } else {
            auth = true;
            this.msg = data.msg;
            this.msgClass = "success";

            // Salva token e id no Vuex
            this.$store.commit("authenticate", {
              token: data.token,
              userId: data.userId
            });
          }

          setTimeout(() => {
            if (!auth) {
              this.msg = null;
            } else {
              // Redireciona após cadastro
              this.$router.push('dashboard');
            }
          }, 2000);
        })
        .catch((err) => console.log(err));
    },

    // Atualização dos dados do usuário
    async update(e) {
      e.preventDefault();

      const data = {
        id: this.id,
        name: this.name,
        email: this.email,
        password: this.password,
        confirmpassword: this.confirmpassword
      }

      // Token de autenticação
      const token = this.$store.getters.token;

      await fetch("http://localhost:3000/api/user", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          "auth-token": token
        },
        body: JSON.stringify(data)
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
