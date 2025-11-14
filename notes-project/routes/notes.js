// Importa o Express para criar o roteador e definir rotas.
const express = require('express');

// Importa o módulo de conexão com o MongoDB (initDb e getDb).
const db = require('../db/connections');

// Importa o ObjectId do MongoDB, usado para converter strings em IDs válidos.
const { ObjectId } = require('mongodb');

// Cria uma instância de router, onde serão registradas todas as rotas de /notes.
const router = express.Router();


// ----------------------------
// ROTA: Formulário de criação
// ----------------------------

// Quando acessar /notes/, renderiza o formulário de criação de nota.
router.get('/', (req, res) => {
    res.render('notes/create');
});


// ----------------------------
// ROTA: Criar nova nota (POST)
// ----------------------------

router.post('/create', async (req, res) => {

    // Recebe os campos enviados no form via body.
    const title = req.body.title;
    const description = req.body.description;

    // Insere uma nova nota na coleção "notes".
    await db.getDb().db().collection('notes').insertOne({ title, description });

    // Redireciona de volta para a página inicial.
    res.redirect(301, '/');
});


// ----------------------------
// ROTA: Editar nota (exibir form)
// ----------------------------

// Rota para acessar o formulário de edição baseado no ID.
router.get('/edit/:id', async (req, res) => {

    // Converte o ID da URL para ObjectId do MongoDB.
    const id = new ObjectId(req.params.id);

    // Busca no banco a nota correspondente ao ID.
    const note = await db.getDb().db().collection('notes').findOne({ _id: id });

    // Renderiza o formulário de edição passando a nota encontrada.
    res.render('notes/edit', { note });
});


// ----------------------------
// ROTA: Atualizar nota (POST)
// ----------------------------

router.post('/update', async (req, res) => {

    // Pega o ID enviado no formulário escondido (hidden input).
    const id = new ObjectId(req.body.id);

    // Pega os novos valores enviados no form.
    const title = req.body.title;
    const description = req.body.description;

    // Atualiza a nota no banco usando updateOne e operador $set.
    await db.getDb()
        .db()
        .collection('notes')
        .updateOne(
            { _id: id },
            { $set: { title, description } }
        );

    // Redireciona de volta para a página inicial.
    res.redirect(301, '/');
});


// ----------------------------
// ROTA: Ver nota individual
// ----------------------------

// Rota para exibir o detalhe de uma nota específica.
router.get('/:id', async (req, res) => {

    // Converte o ID informado na URL.
    const id = new ObjectId(req.params.id);

    // Busca a nota correspondente no banco.
    const note = await db.getDb().db().collection('notes').findOne({ _id: id });

    // Renderiza a view de detalhes.
    res.render('notes/detail', { note });
});


// ----------------------------
// ROTA: Deletar nota (POST)
// ----------------------------

router.post('/delete', async (req, res) => {

    // Pega o ID enviado pelo formulário de exclusão.
    const id = new ObjectId(req.body.id);

    // Remove a nota do banco.
    await db.getDb().db().collection('notes').deleteOne({ _id: id });

    // Volta para a home.
    res.redirect(301, '/');
});


// Exporta o router para ser usado no app principal.
module.exports = router;
