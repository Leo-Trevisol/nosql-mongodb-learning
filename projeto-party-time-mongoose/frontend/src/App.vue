<template>
  <div>
    <!-- Barra de navegação principal -->
    <Navbar />

    <!-- Componente genérico para exibir mensagens globais -->
    <Message />

    <!-- Área onde as rotas (views) são renderizadas -->
    <router-view class="container" />

    <!-- Rodapé da aplicação -->
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Message from './components/Message'

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Message
  }
}
</script>

<style>
  /* Reset básico e fonte padrão da aplicação */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica;
    color: #444;
  }

  /* Container principal das páginas */
  .container {
    min-height: 300px;
  }

  /* Estilo base para links */
  a {
    transition: .5s;
  }

  a:hover {
    color: #c1b696;
  }
</style>
