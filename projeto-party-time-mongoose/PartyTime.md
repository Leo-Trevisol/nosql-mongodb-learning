<h1 align="center">🎉 Party Time - Sistema Full Stack</h1>

<p align="center">
  <strong>Aplicação web para gerenciamento de eventos desenvolvida para prática de NoSQL com MongoDB</strong><br/>
  Projeto educacional full stack integrando backend em Node.js e frontend em Vue.js.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=node.js" />
  <img src="https://img.shields.io/badge/Express-5.x-black?logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-NoSQL-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/Mongoose-ODM-red?logo=mongoose" />
  <img src="https://img.shields.io/badge/Vue.js-3.x-41b883?logo=vue.js" />
  <img src="https://img.shields.io/badge/Vuex-State%20Management-4fc08d" />
  <img src="https://img.shields.io/badge/Vue%20Router-4.x-4fc08d" />
  <img src="https://img.shields.io/badge/JWT-Autenticação-orange" />
  <img src="https://img.shields.io/badge/Multer-Upload-yellow" />
  <img src="https://img.shields.io/badge/BCrypt-Hashing-lightgrey" />
</p>

<hr/>

<h1 align="center">🎉 Party Time - Visão Geral do Sistema</h1>

<p align="center">
  <strong>Aplicação Full Stack desenvolvida para praticar conceitos de NoSQL utilizando MongoDB</strong><br/>
  Projeto educacional que integra backend em Node.js com frontend em Vue.js, explorando autenticação, relacionamentos flexíveis e manipulação de dados em um banco NoSQL.
</p>

<hr/>

<section id="objetivo">
  <h2>🎯 Objetivo do Projeto</h2>
  <p>
    O <strong>Party Time</strong> foi criado com o objetivo principal de <strong>praticar e consolidar conhecimentos em bancos de dados NoSQL</strong>,
    utilizando o <strong>MongoDB</strong> como tecnologia central. Diferente de bancos relacionais tradicionais, o MongoDB permite trabalhar com
    documentos flexíveis, o que é ideal para cenários como gerenciamento de eventos, onde os dados podem variar conforme o contexto.
  </p>
  <p>
    Além do banco de dados, o projeto também explora a construção de uma <strong>API REST</strong> completa e sua integração com um
    <strong>frontend moderno</strong>, simulando um ambiente real de desenvolvimento full stack.
  </p>
</section>

<hr/>

<section id="descricao-sistema">
  <h2>🧩 Descrição Geral do Sistema</h2>
  <p>
    O sistema Party Time é uma aplicação web para <strong>gerenciamento de eventos</strong>, onde usuários podem se cadastrar,
    autenticar e criar festas públicas ou privadas. Cada evento pode conter informações variadas, como descrição,
    data e múltiplas imagens, aproveitando a flexibilidade do modelo orientado a documentos do MongoDB.
  </p>

  <ul>
    <li>👤 Usuários podem criar contas e se autenticar via JWT</li>
    <li>🎉 Eventos podem ser públicos ou privados</li>
    <li>🖼️ Cada evento pode conter múltiplas imagens</li>
    <li>🔐 Controle de acesso baseado no dono do evento</li>
    <li>📄 Operações completas de CRUD</li>
  </ul>
</section>

<hr/>

<section id="nosql-mongodb">
  <h2>🍃 Uso de NoSQL com MongoDB</h2>
  <p>
    O MongoDB foi escolhido por ser um banco de dados NoSQL amplamente utilizado no mercado e por permitir
    uma abordagem mais flexível no armazenamento de dados. No Party Time, os dados são modelados como documentos JSON,
    o que facilita a evolução do sistema sem a necessidade de migrações complexas.
  </p>

  <h3>📌 Conceitos de NoSQL praticados no projeto</h3>
  <ul>
    <li>📄 Modelagem orientada a documentos</li>
    <li>🔗 Referência entre documentos (User → Party)</li>
    <li>🧱 Schemas flexíveis com Mongoose</li>
    <li>📦 Arrays de dados (ex: lista de imagens)</li>
    <li>⚡ Consultas dinâmicas e filtros</li>
  </ul>

  <p>
    Diferente de um modelo relacional rígido, os eventos não precisam seguir exatamente a mesma estrutura,
    permitindo evoluções futuras como novos campos, categorias, convidados ou localização sem grandes impactos.
  </p>
</section>

<hr/>

<section id="arquitetura">
  <h2>🏗️ Arquitetura da Aplicação</h2>
  <p>
    O projeto segue uma arquitetura bem definida, separando responsabilidades entre backend e frontend,
    o que facilita a manutenção e o entendimento do código.
  </p>

  <h3>🔧 Backend</h3>
  <ul>
    <li>Node.js + Express para criação da API REST</li>
    <li>MongoDB como banco de dados NoSQL</li>
    <li>Mongoose para modelagem dos dados</li>
    <li>JWT para autenticação stateless</li>
    <li>Multer para upload de imagens</li>
  </ul>

  <h3>🎨 Frontend</h3>
  <ul>
    <li>Vue.js como framework SPA</li>
    <li>Vue Router para navegação</li>
    <li>Vuex para gerenciamento de estado</li>
    <li>Integração com API via Fetch API</li>
  </ul>
</section>

<hr/>

<section id="fluxo-geral">
  <h2>🔄 Fluxo Geral de Funcionamento</h2>
  <ol>
    <li>Usuário se registra ou realiza login</li>
    <li>O backend gera um token JWT</li>
    <li>O frontend armazena o token no Vuex/localStorage</li>
    <li>Requisições protegidas enviam o token no header</li>
    <li>O backend valida o token e processa a operação</li>
    <li>Os dados são persistidos ou consultados no MongoDB</li>
  </ol>
</section>

<hr/>

<section id="aprendizados">
  <h2>📚 Principais Aprendizados</h2>
  <ul>
    <li>Compreensão prática de bancos NoSQL</li>
    <li>Diferença entre modelagem relacional e orientada a documentos</li>
    <li>Integração frontend e backend via API REST</li>
    <li>Autenticação e autorização com JWT</li>
    <li>Manipulação de arquivos e dados binários</li>
  </ul>
</section>

<hr/>

<section id="conclusao">
  <h2>🚀 Conclusão</h2>
  <p>
    O <strong>Party Time</strong> é um projeto completo com foco educacional, ideal para quem deseja aprender
    <strong>MongoDB e NoSQL na prática</strong>. Ele simula cenários reais de uma aplicação web moderna,
    permitindo explorar desde a modelagem de dados até a experiência do usuário no frontend.
  </p>
  <p>
    A flexibilidade do MongoDB combinada com uma arquitetura bem organizada torna o projeto uma excelente base
    para estudos, experimentações e futuras evoluções.
  </p>
</section>

<hr/>

<div align="center">
  <p><strong>Projeto desenvolvido para fins educacionais e prática de NoSQL com MongoDB 🍃</strong></p>
</div>
