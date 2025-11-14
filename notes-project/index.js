// Importa o Express, usado para criar o servidor e rotas.
const express = require('express');

// Importa o engine do express-handlebars para renderizar views .handlebars.
const { engine } = require('express-handlebars');

// Importa o body-parser para ler dados enviados em formulários (POST).
const bodyParser = require('body-parser');

// Cria uma instância do aplicativo Express.
const app = express();

// Define qual porta o servidor vai rodar.
const port = 8000;


// ----------------------------
// Importação e inicialização do banco de dados
// ----------------------------

// Importa o módulo de conexão com o MongoDB.
const db = require('./db/connections');


// ----------------------------
// Configuração do Template Engine (Handlebars)
// ----------------------------

// Registra o handlebars como engine padrão do Express.
app.engine('handlebars', engine());

// Define que as views serão renderizadas usando handlebars.
app.set('view engine', 'handlebars');

// Define a pasta "public" como estática (CSS, imagens, JS frontend).
app.use(express.static('public'));

// Configura o body-parser para interpretar dados enviados via formulário.
app.use(bodyParser.urlencoded({ extended: true }));


// ----------------------------
// Importa as rotas de /notes
// ----------------------------

const notesRoutes = require('./routes/notes');


// ----------------------------
// Rota principal (Home)
// ----------------------------

// Rota GET para '/', que lista todas as notas.
app.get('/', async function(req, res)  {

  // Busca todos os documentos da coleção "notes".
  const notes = await db.getDb()
      .db().collection('notes').find().toArray();

  // Renderiza a view "home" e envia as notas recuperadas.
  res.render('home', {notes});
});


// ----------------------------
// Rotas específicas de notas
// ----------------------------

// Todas as rotas que começam com /notes serão redirecionadas para o arquivo notes.js.
app.use('/notes', notesRoutes);


// ----------------------------
// Inicialização do Banco e do Servidor
// ----------------------------

// Inicia a conexão com o banco antes de iniciar o servidor.
db.initDb((err, dbClient) => {

  // Se der erro na conexão, mostra no console.
  if (err) {
    console.log(err);
  } else {

    // Se conectou, confirma no console.
    console.log("DB connected");

    // Inicia o servidor Express na porta definida.
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  }
});
