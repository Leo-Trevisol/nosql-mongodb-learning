<template>
  <div>
    <!-- Componente de mensagem para feedback visual -->
    <Message :msg="msg" :msgClass="msgClass" />

    <!-- 
      Formulário reutilizável:
      - page === 'register' → cadastro
      - caso contrário → edição de perfil
    -->
    <form
      id="user-form"
      @submit="page === 'register' ? register($event) : update($event)"
    >
      <!-- ID do usuário (usado apenas na edição) -->
      <input type="hidden" id="id" name="id" v-model="id">

      <!-- Nome -->
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

      <!-- Email -->
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

      <!-- Confirmação de senha -->
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
  // Formulário reutilizável para cadastro e edição de usuário
  name: "RegisterForm",

  components: {
    InputSubmit,
    Message
  },

  // Props recebidas do componente pai
  props: ["user", "page", "btnText"],

  data() {
    return {
      // Dados do usuário (preenchidos na edição)
      id: this.user._id || null,
      name: this.user.name || null,
      email: this.user.email || null,

      // Senhas não vêm do backend
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

      const jsonData = JSON.stringify(data);

      await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: jsonData
      })
        .then((resp) => resp.json())
        .then((data) => {

          let auth = false;

          // Caso ocorra erro no cadastro
          if (data.error) {
            this.msg = data.error;
            this.msgClass = "error";
          } else {
            // Cadastro realizado com sucesso
            auth = true;
            this.msg = data.msg;
            this.msgClass = "success";

            // Autentica o usuário no Vuex
            this.$store.commit("authenticate", {
              token: data.token,
              userId: data.userId
            });
          }

          setTimeout(() => {
            if (!auth) {
              // Limpa mensagem de erro
              this.msg = null;
            } else {
              // Redireciona para o dashboard
              this.$router.push('dashboard');
            }
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        })
    },

    // Atualização de dados do usuário
    async update(e) {
      e.preventDefault();

      const data = {
        id: this.id,
        name: this.name,
        email: this.email,
        password: this.password,
        confirmpassword: this.confirmpassword
      }

      const jsonData = JSON.stringify(data);

      // Token de autenticação armazenado no Vuex
      const token = this.$store.getters.token;

      await fetch("http://localhost:3000/api/user", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          "auth-token": token
        },
        body: jsonData
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            this.msg = data.error;
            this.msgClass = "error";
          } else {
            this.msg = data.msg;
            this.msgClass = "success";
          }
        })
        .catch((err) => {
          console.log(err);
        })

      // Limpa a mensagem após alguns segundos
      setTimeout(() => {
        this.msg = null;
      }, 2000);
    }
  }
}
</script>
