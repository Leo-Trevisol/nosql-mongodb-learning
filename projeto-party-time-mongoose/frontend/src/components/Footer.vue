<template>
  <!-- Rodapé da aplicação -->
  <footer>
    <h3>Party Time &copy; 2021</h3>
    <p>O melhor local para compartilhar seus eventos!</p>
  </footer>
</template>

<script>
export default {
  // Componente responsável pelo rodapé da aplicação
  name: "Footer"
}
</script>

<style scoped>
  /* Estilização do rodapé */
  footer {
    background-color: #25282e;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  /* Título do rodapé */
  footer h3 {
    color: #FFF;
    margin-bottom: 15px;
    font-weight: 300;
    font-size: 1.6rem;
  }

  /* Texto descritivo */
  footer p {
    color: #c1b696;
  }
</style>
