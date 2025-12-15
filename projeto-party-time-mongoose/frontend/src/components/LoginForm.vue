<template>
    <div>
        <!-- Componente de mensagens de sucesso/erro -->
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

            <!-- Botão reutilizável de submit -->
            <InputSubmit text="Entrar" />
        </form>
    </div>
</template>

<script>
import InputSubmit from './form/InputSubmit'
import Message from './Message'

export default {
  name: "LoginForm",
  components: {
      InputSubmit,
      Message
  },
  data() {
      return {
        // Dados do formulário
        email: null,
        password: null,

        // Mensagens de feedback
        msg: null,
        msgClass: null,
      }
  },
  methods: {
    async login(e) {
        // Impede o reload da página
        e.preventDefault();

        // Monta o payload para a API
        const data = {
            email: this.email,
            password: this.password
        }

        const jsonData = JSON.stringify(data);

        // Requisição de login para o backend
        await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: jsonData
        })
        .then((resp) => resp.json())
        .then((data) => {

            let auth = false;

            // Caso ocorra erro no login
            if(data.error) {
                this.msg = data.error;
                this.msgClass = "error";
            } else {
                // Login realizado com sucesso
                auth = true;
                this.msg = data.msg;
                this.msgClass = "success";

                // Salva token e userId no Vuex (autenticação)
                this.$store.commit("authenticate", {
                  token: data.token,
                  userId: data.userId
                });
            }
            
            setTimeout(() => {

                if(!auth) {
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
