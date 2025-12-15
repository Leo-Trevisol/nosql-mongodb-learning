<h1 align="center">🎉 Party Time — Frontend</h1>

<p align="center">
  Aplicação <strong>frontend</strong> desenvolvida com <strong>Vue.js</strong>, responsável pela interface do usuário do projeto <strong>Party Time</strong>.  
  O frontend consome uma <strong>API REST em Node.js + Express</strong>, utilizando autenticação via <strong>JWT</strong> e persistência de dados com <strong>MongoDB</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue.js-Frontend-41b883?logo=vue.js" />
  <img src="https://img.shields.io/badge/Vuex-State%20Management-35495e?logo=vue.js" />
  <img src="https://img.shields.io/badge/Vue%20Router-Routing-4fc08d" />
  <img src="https://img.shields.io/badge/JWT-Authentication-blue" />
  <img src="https://img.shields.io/badge/REST-API-orange" />
  <img src="https://img.shields.io/badge/CRUD-Operations-yellow" />
</p>

<hr/>

<section id="overview">
  <h2>📌 Visão Geral</h2>
  <p>
    O frontend do <strong>Party Time</strong> é uma <strong>Single Page Application (SPA)</strong> construída com Vue.js,
    responsável por toda a experiência visual e interação do usuário.
  </p>
  <p>
    A aplicação permite:
  </p>
  <ul>
    <li>Cadastro e autenticação de usuários</li>
    <li>Criação, edição e exclusão de eventos</li>
    <li>Visualização de festas públicas e privadas</li>
    <li>Upload e exibição de imagens</li>
    <li>Gerenciamento de estado com Vuex</li>
    <li>Controle de rotas protegidas</li>
  </ul>
</section>

<hr/>

<section id="architecture">
  <h2>🏗️ Arquitetura do Frontend</h2>
  <p>
    O projeto segue uma arquitetura modular, separando responsabilidades entre
    <strong>views</strong>, <strong>components</strong>, <strong>store</strong> e <strong>router</strong>.
  </p>

<pre>
frontend/
├── public/
│   ├── img/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   ├── store/
│   ├── views/
│   ├── App.vue
│   └── main.js
└── package.json
</pre>

</section>

<hr/>

<section id="routing">
  <h2>🧭 Sistema de Rotas (Vue Router)</h2>
  <p>
    O controle de navegação é feito com <strong>Vue Router</strong>, utilizando
    <strong>rotas públicas</strong> e <strong>rotas protegidas</strong>.
  </p>

  <h3>🔐 Proteção de Rotas</h3>
  <p>
    Algumas rotas exigem autenticação. Isso é controlado via <code>meta.requiresAuth</code>
    e um <strong>navigation guard</strong> global.
  </p>

  <ul>
    <li><strong>Públicas:</strong> Home, Login, Register, Party</li>
    <li><strong>Privadas:</strong> Dashboard, Profile, New Party, Edit Party</li>
  </ul>
</section>

<hr/>

<section id="state">
  <h2>🗃️ Gerenciamento de Estado (Vuex)</h2>
  <p>
    O estado global da aplicação é gerenciado com <strong>Vuex</strong>, armazenando:
  </p>

  <ul>
    <li>Status de autenticação</li>
    <li>Token JWT</li>
    <li>ID do usuário logado</li>
  </ul>

  <p>
    O estado é persistido no <strong>LocalStorage</strong> utilizando <code>vuex-persist</code>,
    garantindo que o usuário permaneça logado após atualizar a página.
  </p>
</section>

<hr/>

<section id="components">
  <h2>🧩 Componentes</h2>

  <h3>📦 Componentes Reutilizáveis</h3>
  <ul>
    <li><strong>Navbar</strong>: Navegação principal e controle de autenticação</li>
    <li><strong>Footer</strong>: Rodapé da aplicação</li>
    <li><strong>Message</strong>: Feedback visual de sucesso e erro</li>
    <li><strong>InputSubmit</strong>: Botão de envio reutilizável</li>
  </ul>

  <h3>📝 Formulários</h3>
  <ul>
    <li><strong>LoginForm</strong>: Autenticação do usuário</li>
    <li><strong>UserForm</strong>: Cadastro e edição de perfil</li>
    <li><strong>PartyForm</strong>: Criação e edição de eventos</li>
  </ul>

  <h3>📊 DataTable</h3>
  <p>
    Componente responsável por listar, editar e remover festas do usuário no Dashboard.
  </p>
</section>

<hr/>

<section id="views">
  <h2>📄 Views</h2>
  <ul>
    <li><strong>Home</strong>: Exibe festas públicas</li>
    <li><strong>Login</strong>: Autenticação</li>
    <li><strong>Register</strong>: Cadastro de usuário</li>
    <li><strong>Dashboard</strong>: Gerenciamento das festas do usuário</li>
    <li><strong>NewParty</strong>: Cadastro de nova festa</li>
    <li><strong>EditParty</strong>: Edição de festa existente</li>
    <li><strong>Party</strong>: Visualização detalhada de uma festa</li>
    <li><strong>Profile</strong>: Edição de dados do usuário</li>
  </ul>
</section>

<hr/>

<section id="api">
  <h2>🔗 Integração com a API</h2>
  <p>
    A comunicação com o backend é feita via <strong>Fetch API</strong>, consumindo endpoints REST.
  </p>

  <ul>
    <li>Envio de JSON para autenticação e atualização de dados</li>
    <li>Uso de <code>FormData</code> para upload de imagens</li>
    <li>Envio do token JWT no header <code>auth-token</code></li>
  </ul>
</section>

<hr/>

<section id="conclusion">
  <h2>✅ Conclusão</h2>
  <p>
    Este frontend foi desenvolvido com foco em <strong>aprendizado prático</strong>,
    explorando conceitos essenciais de aplicações modernas:
  </p>

  <ul>
    <li>SPA com Vue.js</li>
    <li>Gerenciamento de estado global</li>
    <li>Proteção de rotas</li>
    <li>Integração completa com API REST</li>
    <li>Fluxo completo de CRUD</li>
  </ul>

  <p>
    O projeto serve como base sólida para estudos em <strong>Vue.js</strong>,
    <strong>integração frontend/backend</strong> e aplicações full stack.
  </p>
</section>
