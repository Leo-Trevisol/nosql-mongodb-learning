const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// Rotas
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
