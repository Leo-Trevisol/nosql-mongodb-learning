const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

//DB

const db = require('./db/connections');

// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const notesRoutes = require('./routes/notes');

// Rotas
app.get('/', (req, res) => {
  res.render('home');
});

app.use('/notes', notesRoutes);

db.initDb((err, dbClient) => {
  if (err) {
    console.log(err);
  }else{
    console.log("DB connected");
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  }
})
