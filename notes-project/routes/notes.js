const express = require('express');
const db = require('../db/connections');
const { ObjectId } = require('mongodb');


const router = express.Router();


router.get('/', (req, res) => {
    res.render('notes/create');
});

router.post('/create', (req, res) => {

    const data = req.body;

    const title = data.title;
    const description = data.description;

    db.getDb()
    .db()
    .collection('notes')
    .insertOne({ title, description })

    res.redirect(301, '/');

})

module.exports = router;