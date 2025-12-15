// Importa a função defineConfig do Vue CLI Service
// Ela ajuda com autocomplete e validações de configuração
const { defineConfig } = require('@vue/cli-service')

// Exporta a configuração do projeto Vue
module.exports = defineConfig({

  // Força o Vue CLI a transpilar dependências dentro de node_modules
  // Útil quando alguma dependência usa recursos JS modernos
  // que não são compatíveis com navegadores mais antigos
  transpileDependencies: true

})
