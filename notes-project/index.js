const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

//Rotas
app.get('/', (req, res) => {
  res.send('O aplicativo está funcionando!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
