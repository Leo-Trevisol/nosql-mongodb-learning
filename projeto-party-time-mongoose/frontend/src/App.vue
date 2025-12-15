<template>
  <div>
    <!-- Barra de navegação fixa no topo -->
    <Navbar />

    <!-- Componente global para exibição de mensagens (feedbacks/alerts) -->
    <Message />

    <!-- Área onde as rotas são renderizadas -->
    <router-view class="container" />

    <!-- Rodapé da aplicação -->
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Message from './components/Message';

export default {
  name: "App",
  // Registro dos componentes globais utilizados no layout principal
  components: {
    Navbar,
    Footer,
    Message
  }
}
</script>

<style>
  /* Reset básico e estilo global da aplicação */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica;
    color: #444;
  }

  /* Container principal onde as views são exibidas */
  .container {
    min-height: 300px;
  }

  /* Efeito visual padrão para links */
  a {
    transition: .5s;
  }

  a:hover {
    color: #c1b696;
  }
</style>
