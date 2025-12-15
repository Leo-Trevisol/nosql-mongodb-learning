<h1 align="center">🔧 Backend - Party Time API</h1>

<p align="center">
  <strong>API REST desenvolvida para prática de MongoDB e NoSQL</strong><br/>
  Backend responsável por autenticação, regras de negócio e persistência de dados da aplicação Party Time.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-brightgreen?logo=node.js" />
  <img src="https://img.shields.io/badge/Express-Framework-black?logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-NoSQL-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/Mongoose-ODM-red?logo=mongoose" />
  <img src="https://img.shields.io/badge/JWT-Autenticação-orange" />
  <img src="https://img.shields.io/badge/Multer-Upload-yellow" />
</p>

<hr/>

<section id="overview">
  <h2>📌 Visão Geral do Backend</h2>
  <p>
    Este backend foi desenvolvido com o objetivo de <strong>praticar conceitos de bancos de dados NoSQL</strong>,
    utilizando o <strong>MongoDB</strong> em conjunto com o <strong>Mongoose</strong> para modelagem de dados.
    A API segue o estilo <strong>REST</strong> e é consumida por um frontend desenvolvido em <strong>Vue.js</strong>.
  </p>
  <p>
    O sistema permite o gerenciamento de <strong>usuários</strong> e <strong>eventos (parties)</strong>,
    aplicando regras de autenticação, autorização e privacidade diretamente no backend.
  </p>
</section>

<section id="architecture">
  <h2>🏗️ Arquitetura do Projeto</h2>
  <p>A estrutura do backend foi organizada de forma modular, separando responsabilidades:</p>

<pre>
backend/
 ├── helpers/   # Middlewares e funções auxiliares
 ├── models/    # Schemas do MongoDB (Mongoose)
 ├── routes/    # Rotas da API
 ├── server.js  # Inicialização do servidor
 └── package.json
</pre>

</section>

<section id="models">
  <h2>🧬 Modelagem de Dados com Mongoose</h2>

  <h3>👤 User</h3>
  <p>
    Representa os usuários da aplicação. As senhas são armazenadas de forma segura utilizando
    <strong>hash com bcrypt</strong>.
  </p>
  <ul>
    <li><strong>name</strong>: nome do usuário</li>
    <li><strong>email</strong>: e-mail de login</li>
    <li><strong>password</strong>: senha criptografada</li>
  </ul>

  <h3>🎉 Party</h3>
  <p>
    Representa um evento criado por um usuário. Esse modelo explora bem a flexibilidade do NoSQL,
    utilizando arrays e relacionamentos manuais.
  </p>
  <ul>
    <li><strong>title</strong>: título do evento</li>
    <li><strong>description</strong>: descrição</li>
    <li><strong>partyDate</strong>: data do evento</li>
    <li><strong>photos</strong>: array de imagens</li>
    <li><strong>privacy</strong>: evento público ou privado</li>
    <li><strong>userId</strong>: referência ao usuário criador</li>
  </ul>
</section>

<section id="auth">
  <h2>🔐 Autenticação e Segurança</h2>
  <p>
    A autenticação é baseada em <strong>JWT (JSON Web Token)</strong>. Após o login ou cadastro,
    o backend gera um token que deve ser enviado pelo frontend no header <code>auth-token</code>.
  </p>

  <h3>🔎 Middleware check-token</h3>
  <p>
    Responsável por validar o token e garantir que apenas usuários autenticados
    acessem rotas protegidas.
  </p>

  <h3>👤 get-user-by-token</h3>
  <p>
    Função auxiliar que decodifica o token JWT, extrai o <code>userId</code> e busca
    o usuário correspondente no MongoDB.
  </p>
</section>

<section id="routes">
  <h2>🛣️ Rotas da API</h2>

  <h3>🔑 Auth</h3>
  <ul>
    <li><code>POST /api/auth/register</code> – Cadastro de usuário</li>
    <li><code>POST /api/auth/login</code> – Login e geração do token</li>
  </ul>

  <h3>👤 User</h3>
  <ul>
    <li><code>GET /api/user/:id</code> – Buscar dados do usuário</li>
    <li><code>PUT /api/user</code> – Atualizar dados do usuário</li>
  </ul>

  <h3>🎉 Party</h3>
  <ul>
    <li><code>POST /api/party</code> – Criar evento</li>
    <li><code>GET /api/party/all</code> – Listar eventos públicos</li>
    <li><code>GET /api/party/userparties</code> – Eventos do usuário</li>
    <li><code>GET /api/party/:id</code> – Buscar evento (respeitando privacidade)</li>
    <li><code>PUT /api/party</code> – Atualizar evento</li>
    <li><code>DELETE /api/party</code> – Remover evento</li>
  </ul>
</section>

<section id="nosql">
  <h2>🍃 Uso de NoSQL no Projeto</h2>
  <p>
    O MongoDB é utilizado explorando características típicas de bancos NoSQL:
  </p>
  <ul>
    <li>Esquemas flexíveis</li>
    <li>Uso de arrays para dados variáveis (fotos)</li>
    <li>Relacionamentos manuais entre documentos</li>
    <li>Consultas orientadas a documentos</li>
  </ul>

  <p>
    Essas escolhas tornam o projeto ideal para aprendizado prático e compreensão
    das diferenças entre bancos relacionais e não relacionais.
  </p>
</section>

<hr/>

<p align="center">
  <strong>Projeto educacional desenvolvido para estudo de Backend, NoSQL e MongoDB</strong>
</p>
