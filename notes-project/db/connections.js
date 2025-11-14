// Importa o MongoClient do driver oficial do MongoDB para Node.js.
// Ele é usado para criar a conexão com o banco.
const { MongoClient } = require('mongodb');

// Define a URL de conexão com o MongoDB.
// Aqui está apontando para o banco local na porta 27017 e usando a database "notesDb".
const url = "mongodb://localhost:27017/notesDb";

// Variável privada onde guardaremos a conexão com o banco após estabelecida.
// Essa variável será acessada pelas funções initDb e getDb.
let _db;

// Função que inicializa a conexão com o banco.
// Recebe um callback (cb) que será chamado quando a conexão for concluída (ou der erro).
const initDb = cb => {

    // Tenta conectar ao MongoDB usando a URL definida acima.
    MongoClient.connect(url)
        .then(client => {

            // Se conectar com sucesso, guarda o cliente na variável _db.
            _db = client;

            // Chama o callback informando que não houve erro (null) e envia o cliente.
            cb(null, _db);
        })
        .catch(err => {

            // Se der erro ao conectar, chama o callback passando o erro.
            cb(err);
        });
}

// Função que retorna a conexão atual com o banco.
// Útil para ser usada nos arquivos de rotas.
const getDb = () => {
  return _db;
}

// Exporta as duas funções para que outros arquivos possam usá-las.
module.exports = {
    initDb,
    getDb
};
