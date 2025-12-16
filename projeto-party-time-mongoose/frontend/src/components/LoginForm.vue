<template>
    <div>
        <!-- Componente de mensagem para feedback de erro ou sucesso -->
        <Message :msg="msg" :msgClass="msgClass" />

        <!-- Formulário de login -->
        <form id="login-form" @submit="login($event)">
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

            <!-- Botão de envio reutilizável -->
            <InputSubmit text="Entrar" />
        </form>
    </div>
</template>

<script>
import InputSubmit from './form/InputSubmit'
import Message from './Message'

export default {
  // Componente responsável pelo login do usuário
  name: "LoginForm",

  components: {
      InputSubmit,
      Message
  },

  data() {
      return {
        // Credenciais do usuário
        email: null,
        password: null,

        // Mensagens de feedback
        msg: null,
        msgClass: null,
      }
  },

  methods: {
    // Realiza a autenticação do usuário
    async login(e) {
        e.preventDefault();

        // Dados enviados para a API
        const data = {
            email: this.email,
            password: this.password
        }

        const jsonData = JSON.stringify(data);

        await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: jsonData
        })
        .then((resp) => resp.json())
        .then((data) => {

            let auth = false;

            if(data.error) {
                // Erro na autenticação
                this.msg = data.error;
                this.msgClass = "error";
            } else {
                // Login realizado com sucesso
                auth = true;
                this.msg = data.msg;
                this.msgClass = "success";

                // Salva token e usuário no Vuex
                this.$store.commit("authenticate", {
                  token: data.token,
                  userId: data.userId
                });
            }
            
            setTimeout(() => {
                if(!auth) {
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
    }
  }
}
</script>

<style scoped>
    /* Estilização do formulário de login */
    #login-form {
        max-width: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    /* Container padrão dos inputs */
    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        text-align: left;
    }

    .input-container label {
        margin-bottom: 10px;
        color: #555;
    }

    .input-container input {
        padding: 10px;
        border: 1px solid #e8e8e8;
    }
</style>
