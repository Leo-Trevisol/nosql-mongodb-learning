<h1 align="center">🎨 Frontend - Party Time Application</h1>

<p align="center">
  <strong>Aplicação web Vue.js para gerenciamento de eventos com integração completa com API REST</strong><br/>
  Interface moderna e responsiva para criação, visualização e administração de eventos.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue.js-3.x-41b883?logo=vue.js" />
  <img src="https://img.shields.io/badge/Vuex-State%20Management-4fc08d" />
  <img src="https://img.shields.io/badge/Vue%20Router-4.x-4fc08d" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript" />
  <img src="https://img.shields.io/badge/CSS3-Styling-blue?logo=css3" />
  <img src="https://img.shields.io/badge/HTML5-Markup-orange?logo=html5" />
  <img src="https://img.shields.io/badge/Fetch%20API-Requests-lightgrey" />
  <img src="https://img.shields.io/badge/FormData-Uploads-green" />
  <img src="https://img.shields.io/badge/Responsive-Design-9cf" />
</p>

<hr/>

<section id="visao-geral-frontend">
  <h2>📋 Visão Geral do Frontend</h2>
  <p>
    O frontend do <strong>Party Time</strong> é uma SPA (Single Page Application) construída com Vue.js 3 que fornece uma interface completa para interação com o backend. A aplicação implementa autenticação JWT, upload de múltiplas imagens e todas as operações CRUD através de uma interface intuitiva.
  </p>
  
  <h3>🎯 Principais Características</h3>
  <ul>
    <li>✅ <strong>Autenticação JWT</strong> com Vuex e localStorage</li>
    <li>✅ <strong>Upload de múltiplas imagens</strong> usando FormData</li>
    <li>✅ <strong>Proteção de rotas</strong> com Vue Router Guards</li>
    <li>✅ <strong>Gerenciamento de estado</strong> centralizado com Vuex</li>
    <li>✅ <strong>Interface responsiva</strong> e moderna</li>
    <li>✅ <strong>Forms reativos</strong> com validação básica</li>
    <li>✅ <strong>Persistência de sessão</strong> com Vuex Persist</li>
    <li>✅ <strong>Navegação fluida</strong> entre páginas</li>
  </ul>
</section>

<hr/>

<section id="estrutura-frontend">
  <h2>📁 Estrutura de Arquivos</h2>
  
  <pre>
frontend/
├── 📄 package.json              # Dependências e scripts
├── 📄 vue.config.js            # Configuração Vue CLI
├── 📂 public/                  # Arquivos estáticos
│   ├── 📄 index.html           # Template HTML principal
│   ├── 📂 img/                 # Imagens estáticas
│   │   ├── 🖼️ party1.jpg       # Imagem de exemplo 1
│   │   ├── 🖼️ party2.jpg       # Imagem de exemplo 2
│   │   ├── 🖼️ party3.jpg       # Imagem de exemplo 3
│   │   ├── 🖼️ party4.jpg       # Imagem de exemplo 4
│   │   └── 🖼️ partytimelogo.png # Logo da aplicação
│   └── 📄 favicon.ico          # Ícone do site
├── 📂 src/                     # Código fonte da aplicação
│   ├── 📄 App.vue              # Componente raiz da aplicação
│   ├── 📄 main.js              # Ponto de entrada JavaScript
│   ├── 📂 assets/              # Recursos estáticos (CSS, imagens)
│   │   └── 🖼️ logo.png         # Logo Vue.js
│   ├── 📂 components/          # Componentes reutilizáveis
│   │   ├── 📄 DataTable.vue    # Tabela de eventos
│   │   ├── 📄 Footer.vue       # Rodapé da aplicação
│   │   ├── 📄 LoginForm.vue    # Formulário de login
│   │   ├── 📄 Message.vue      # Componente de mensagens
│   │   ├── 📄 Navbar.vue       # Barra de navegação
│   │   ├── 📄 PartyForm.vue    # Formulário de eventos
│   │   ├── 📄 UserForm.vue     # Formulário de usuário
│   │   └── 📂 form/            # Componentes de formulário
│   │       └── 📄 InputSubmit.vue # Botão de submit
│   ├── 📂 router/              # Configuração de rotas
│   │   └── 📄 index.js         # Definição das rotas Vue
│   ├── 📂 store/               # Gerenciamento de estado (Vuex)
│   │   └── 📄 index.js         # Store Vuex principal
│   └── 📂 views/               # Páginas/Views da aplicação
│       ├── 📄 Dashboard.vue    # Painel de controle
│       ├── 📄 EditParty.vue    # Edição de evento
│       ├── 📄 Home.vue         # Página inicial
│       ├── 📄 Login.vue        # Página de login
│       ├── 📄 NewParty.vue     # Criação de evento
│       ├── 📄 Party.vue        # Detalhes do evento
│       ├── 📄 Profile.vue      # Perfil do usuário
│       └── 📄 Register.vue     # Registro de usuário
└── 📄 README.md                # Documentação do projeto
  </pre>
</section>

<hr/>

<section id="arquivo-principal">
  <h2>🚀 App.vue - Componente Raiz</h2>
  
  <h3>📦 Estrutura Principal</h3>
  <pre>
&lt;template&gt;
  &lt;div&gt;
    &lt;Navbar /&gt;
    &lt;Message /&gt;
    &lt;router-view class="container" /&gt;
    &lt;Footer /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Message from './components/Message';

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Message
  }
}
&lt;/script&gt;
  </pre>
  
  <h3>🎨 Estilos Globais</h3>
  <pre>
&lt;style&gt;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica;
    color: #444;
  }

  .container {
    min-height: 300px;
  }

  a {
    transition: .5s;
  }

  a:hover {
    color: #c1b696;
  }
&lt;/style&gt;
  </pre>
</section>

<hr/>

<section id="main-js">
  <h2>📦 main.js - Configuração Vue</h2>
  
  <h3>⚙️ Inicialização da Aplicação</h3>
  <pre>
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

const app = createApp(App).use(router)

app.use(store)

app.mount('#app')
  </pre>
</section>

<hr/>

<section id="componentes-principais">
  <h2>🧩 Componentes Principais</h2>
  
  <h3>🔐 Navbar.vue - Barra de Navegação</h3>
  <p><strong>Funcionalidade:</strong> Navegação condicional baseada no estado de autenticação</p>
  <pre>
&lt;template&gt;
  &lt;div id="nav"&gt;
    &lt;router-link to="/" id="logo-container"&gt;
      &lt;img src="/img/partytimelogo.png" alt="Party Time"&gt;
    &lt;/router-link&gt;    
    &lt;h2 id="nav-title"&gt;Party Time&lt;/h2&gt;
    &lt;div id="nav-links"&gt;
      &lt;router-link to="/"&gt;Festas&lt;/router-link&gt;
      &lt;router-link to="/login" v-show="!authenticated"&gt;Entrar&lt;/router-link&gt;
      &lt;router-link to="/register" v-show="!authenticated"&gt;Cadastrar&lt;/router-link&gt;
      &lt;router-link to="/dashboard" v-show="authenticated"&gt;Dashboard&lt;/router-link&gt;
      &lt;router-link to="/profile" v-show="authenticated"&gt;Configurações&lt;/router-link&gt;
      &lt;button @click="logout($event)" v-show="authenticated"&gt;Logout&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
  </pre>
  
  <h3>📋 DataTable.vue - Tabela de Eventos</h3>
  <p><strong>Funcionalidade:</strong> Exibe lista de eventos com ações de edição e exclusão</p>
  <pre>
&lt;div class="data-row" v-for="(party, index) in parties" :key="party._id"&gt;
  &lt;div class="data-id-container"&gt;{{ index + 1 }}&lt;/div&gt;
  &lt;div class="data-title-container"&gt;
    &lt;router-link :to="`/party/${party._id}`"&gt;{{ party.title }}&lt;/router-link&gt;
  &lt;/div&gt;
  &lt;div class="data-actions-container"&gt;
    &lt;router-link :to="`/editparty/${party._id}`" class="edit-btn"&gt;Editar&lt;/router-link&gt;
    &lt;button class="remove-btn" @click="remove(party._id)"&gt;Remover&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
  </pre>
  
  <h3>📝 PartyForm.vue - Formulário de Eventos</h3>
  <p><strong>Funcionalidade:</strong> Formulário reativo para criação e edição de eventos com upload de imagens</p>
  <pre>
&lt;form id="register-form" enctype="multipart/form-data" 
      @submit="page === 'newparty' ? createParty($event) : update($event)"&gt;
  &lt;input type="hidden" id="id" name="id" v-model="id"&gt;
  &lt;input type="hidden" id="user_id" name="user_id" v-model="user_id"&gt;
  &lt;div class="input-container"&gt;
    &lt;label for="title"&gt;Título do Evento:&lt;/label&gt;
    &lt;input type="text" id="title" name="title" v-model="title" placeholder="Digite o título"&gt;
  &lt;/div&gt;
  &lt;div class="input-container"&gt;
    &lt;label for="description"&gt;Descrição:&lt;/label&gt;
    &lt;textarea id="description" name="description" v-model="description" 
              placeholder="O que vai acontecer ou o que já aconteceu?"&gt;&lt;/textarea&gt;
  &lt;/div&gt;
  &lt;div class="input-container"&gt;
    &lt;label for="party_date"&gt;Data da Festa:&lt;/label&gt;
    &lt;input type="date" id="party_date" name="party_date" v-model="party_date"&gt;
  &lt;/div&gt;
  &lt;div class="input-container"&gt;
    &lt;label for="photos"&gt;Imagens:&lt;/label&gt;
    &lt;input type="file" multiple="multiple" id="photos" name="photos" 
           ref="file" @change="onChange"&gt;
  &lt;/div&gt;
  &lt;div class="input-container checkbox-container"&gt;
    &lt;label for="privacy"&gt;Evento privado&lt;/label&gt;
    &lt;input type="checkbox" multiple id="privacy" name="privacy" v-model="privacy"&gt;
  &lt;/div&gt;
  &lt;InputSubmit :text="btnText" /&gt;
&lt;/form&gt;
  </pre>
</section>

<hr/>

<section id="vuex-store">
  <h2>🏪 Vuex Store - Gerenciamento de Estado</h2>
  
  <h3>📦 store/index.js</h3>
  <pre>
import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state() {
    return {
      authenticated: false,
      token: null,
      userId: null
    }
  },
  mutations: {
    authenticate(state, data) {
      state.authenticated = true
      state.token = data.token
      state.userId = data.userId
    },
    logout(state) {
      state.authenticated = false
      state.token = null
      state.userId = null
    },
  },
  getters: {
    authenticated: state => state.authenticated,
    token: state => state.token,
    userId: state => state.userId
  },
  plugins: [vuexLocal.plugin]
})
  </pre>
  
  <h3>🔄 Uso nos Componentes</h3>
  <pre>
// No componente (ex: LoginForm.vue)
this.$store.commit("authenticate", {token: data.token, userId: data.userId});

// Para acessar dados
const token = this.$store.getters.token;
const userId = this.$store.getters.userId;
const authenticated = this.$store.getters.authenticated;
  </pre>
</section>

<hr/>

<section id="vue-router">
  <h2>🛣️ Vue Router - Navegação e Proteção de Rotas</h2>
  
  <h3>📄 router/index.js</h3>
  <pre>
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        requiresAuth: false
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
        requiresAuth: true  // Rota protegida
    }
  },
  // ... outras rotas
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Guard de navegação
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.authenticated === false) {
      next({
          path: '/login',
          params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else {
      next()
  }
})

export default router
  </pre>
</section>

<hr/>

<section id="integracao-api">
  <h2>🔌 Integração com API Backend</h2>
  
  <h3>📡 Estrutura de Chamadas HTTP</h3>
  
  <h4>POST - Login de Usuário</h4>
  <pre>
async login(e) {
    e.preventDefault();

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
        // Tratamento da resposta
    })
}
  </pre>
  
  <h4>POST - Criar Evento com Imagens (FormData)</h4>
  <pre>
async createParty(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('party_date', this.party_date);
    formData.append('privacy', this.privacy);

    if(this.photos.length > 0) {
        for (const i of Object.keys(this.photos)) {
            formData.append('photos', this.photos[i])
        }
    }

    const token = this.$store.getters.token;

    await fetch("http://localhost:3000/api/party", {
        method: "POST",
        headers: {
            "auth-token": token  // Token no header personalizado
        },
        body: formData  // Envio como FormData
    })
    // ... tratamento da resposta
}
  </pre>
  
  <h4>GET - Buscar Eventos com Autenticação</h4>
  <pre>
await fetch("http://localhost:3000/api/party/userparties", {
    method: "GET",
    headers: { 
        "Content-type": "application/json",
        "auth-token": token  // Token obrigatório
    }
})
  </pre>
</section>

<hr/>

<section id="views-paginas">
  <h2>📄 Views/Páginas da Aplicação</h2>
  
  <h3>🏠 Home.vue - Página Inicial</h3>
  <ul>
    <li><strong>Propósito:</strong> Exibir eventos públicos</li>
    <li><strong>Autenticação:</strong> Não requerida</li>
    <li><strong>Recursos:</strong> Grid de eventos com imagens, datas e links para detalhes</li>
  </ul>
  
  <h3>📊 Dashboard.vue - Painel de Controle</h3>
  <ul>
    <li><strong>Propósito:</strong> Gerenciar eventos do usuário</li>
    <li><strong>Autenticação:</strong> Requerida</li>
    <li><strong>Recursos:</strong> Tabela de eventos, ações de edição/exclusão, link para criar novo evento</li>
  </ul>
  
  <h3>🎉 Party.vue - Detalhes do Evento</h3>
  <ul>
    <li><strong>Propósito:</strong> Exibir detalhes completos de um evento</li>
    <li><strong>Autenticação:</strong> Condicional (depende da privacidade do evento)</li>
    <li><strong>Recursos:</strong> Galeria de imagens, descrição completa, data formatada</li>
  </ul>
  
  <h3>👤 Profile.vue - Perfil do Usuário</h3>
  <ul>
    <li><strong>Propósito:</strong> Editar informações do usuário</li>
    <li><strong>Autenticação:</strong> Requerida</li>
    <li><strong>Recursos:</strong> Formulário de atualização, validação de senha</li>
  </ul>
</section>

<hr/>

<section id="tratamento-imagens">
  <h2>🖼️ Tratamento de Imagens</h2>
  
  <h3>📤 Upload de Múltiplas Imagens</h3>
  <pre>
// No PartyForm.vue
onChange(e) {
    this.photos = e.target.files;  // Captura múltiplos arquivos
    this.showMiniImages = false;   // Oculta miniaturas antigas
}
  </pre>
  
  <h3>🔄 Conversão de Paths</h3>
  <pre>
// Conversão de caminhos locais para URLs acessíveis
this.party.photos.forEach((photo, index) => {
    this.party.photos[index] = photo.replace("public", "http://localhost:3000")
                                    .replaceAll("\\", "/");
});
  </pre>
  
  <h3>🎨 Exibição de Imagens</h3>
  <pre>
// Background image dinâmico
&lt;div class="main-image" :style="{'background-image': 'url(' + party.photos[0] +')'}"&gt;&lt;/div&gt;

// Miniaturas em grid
&lt;div class="mini-image" v-for="(photo, index) in party.photos" :key="index" 
     :style="{'background-image': 'url(' + party.photos[index] +')'}"&gt;&lt;/div&gt;
  </pre>
</section>

<hr/>

<section id="configuracao-frontend">
  <h2>⚙️ Configuração e Execução</h2>
  
  <h3>📦 package.json - Dependências</h3>
  <pre>
{
  "dependencies": {
    "vue": "^3.2.13",               // Framework Vue.js
    "vue-router": "^4.0.3",         // Roteamento
    "vuex": "^4.0.0",              // Gerenciamento de estado
    "vuex-persist": "^3.1.3",      // Persistência de estado
    "core-js": "^3.8.3"            // Polyfills
  },
  "devDependencies": {
    "@vue/cli-service": "~5.0.0",  // Vue CLI
    "@vue/compiler-sfc": "^3.2.13" // Compilador Single File Components
  }
}
  </pre>
  
  <h3>🚀 Comandos para Executar</h3>
  <pre>
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run serve

# A aplicação estará disponível em:
# http://localhost:8080

# Construir para produção
npm run build

# Executar testes unitários
npm run test:unit

# Executar lint
npm run lint
  </pre>
</section>

<hr/>

<section id="fluxo-autenticacao-frontend">
  <h2>🔄 Fluxo de Autenticação no Frontend</h2>
  
  <h3>1. Registro de Usuário</h3>
  <pre>
Usuário preenche formulário → POST /api/auth/register → 
→ Recebe token JWT → Vuex.commit("authenticate") → 
→ Redireciona para /dashboard → Estado persistido no localStorage
  </pre>
  
  <h3>2. Login</h3>
  <pre>
Usuário preencre credenciais → POST /api/auth/login → 
→ Recebe token e userId → Vuex.commit("authenticate") → 
→ Redireciona para página solicitada ou /dashboard
  </pre>
  
  <h3>3. Acesso a Rota Protegida</h3>
  <pre>
Navegação para rota com meta.requiresAuth → Router Guard verifica store.authenticated → 
→ Se false: redireciona para /login → Se true: permite acesso
  </pre>
  
  <h3>4. Logout</h3>
  <pre>
Clique em Logout → Vuex.commit("logout") → Limpa estado e localStorage → 
→ Redireciona para página inicial → Navbar atualiza links
  </pre>
</section>

<hr/>

<hr/>

<section id="consideracoes-tecnicas">
  <h2>💡 Considerações Técnicas</h2>
  
  <h3>✅ Pontos Fortes</h3>
  <ul>
    <li>Arquitetura Vue.js moderna com Composition API implícita</li>
    <li>Integração completa com backend via fetch API</li>
    <li>Proteção de rotas eficiente com Vue Router</li>
    <li>Persistência de estado com Vuex Persist</li>
    <li>Interface limpa e responsiva</li>
    <li>Upload de múltiplos arquivos funcionando</li>
    <li>Autenticação JWT bem implementada</li>
  </ul>
  
  <h3>🔧 Áreas para Melhoria</h3>
  <ul>
    <li>Refatorar chamadas API para service layer</li>
    <li>Adicionar validação client-side nos formulários</li>
    <li>Implementar error boundaries</li>
    <li>Adicionar testes unitários e E2E</li>
    <li>Otimizar carregamento de imagens</li>
    <li>Implementar lazy loading de componentes</li>
    <li>Adicionar internacionalização (i18n)</li>
  </ul>
</section>

<hr/>

<section id="dicas-desenvolvimento">
  <h2>💻 Dicas para Desenvolvimento</h2>
  
  <h3>🔍 Debugging</h3>
  <ul>
    <li>Use Vue Devtools para inspecionar estado e componentes</li>
    <li>Monitore as requisições de rede no DevTools</li>
    <li>Verifique o localStorage para estado persistido</li>
    <li>Use console.log estratégicamente para fluxo de dados</li>
  </ul>
  
  <h3>⚡ Performance</h3>
  <ul>
    <li>Implemente lazy loading para views/rotas</li>
    <li>Otimize imagens antes do upload</li>
    <li>Considere virtual scrolling para listas longas</li>
    <li>Use async/await apropriadamente para evitar bloqueio</li>
  </ul>
  
  <h3>🔐 Segurança</h3>
  <ul>
    <li>Nunca exponha tokens no console.log em produção</li>
    <li>Implemente timeout automático para sessões</li>
    <li>Valide todos os inputs do usuário</li>
    <li>Use HTTPS em produção</li>
  </ul>
</section>

<hr/>

<div align="center">
  <p><strong>Frontend desenvolvido com Vue.js para aprendizado de desenvolvimento web moderno</strong></p>
  <p>Interface completa para o sistema Party Time 🎉</p>
</div>
