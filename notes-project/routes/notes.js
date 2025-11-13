const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('notes/create');
});

module.exports = router;