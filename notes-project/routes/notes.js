const express = require('express');
const db = require('../db/connections');
const { ObjectId } = require('mongodb');

const router = express.Router();

// Form de criação
router.get('/', (req, res) => {
    res.render('notes/create');
});

// Criar nova nota
router.post('/create', async (req, res) => {

    const title = req.body.title;
    const description = req.body.description;

    await db.getDb().db().collection('notes').insertOne({ title, description });

    res.redirect(301, '/');
});

// Editar nota (form)
router.get('/edit/:id', async (req, res) => {

    const id = new ObjectId(req.params.id);

    const note = await db.getDb().db().collection('notes').findOne({ _id: id });

    res.render('notes/edit', { note });
});

// Atualizar nota
router.post('/update', async (req, res) => {

    const id = new ObjectId(req.body.id);
    const title = req.body.title;
    const description = req.body.description;

    await db.getDb()
        .db()
        .collection('notes')
        .updateOne(
            { _id: id },
            { $set: { title, description } }
        );

    res.redirect(301, '/');
});

// Ver nota individual (detalhes)
router.get('/:id', async (req, res) => {

    const id = new ObjectId(req.params.id);

    const note = await db.getDb().db().collection('notes').findOne({ _id: id });

    res.render('notes/detail', { note });
});

// Deletar nota
router.post('/delete', async (req, res) => {
    const id = new ObjectId(req.body.id);

    await db.getDb().db().collection('notes').deleteOne({ _id: id });

    res.redirect(301, '/');
});

module.exports = router;
