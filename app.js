const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Anderson Cifuentes',
    titulo: 'Curso de node',
  });
});
app.get('/generic', (req, res) => {
  res.render('generics', {
    nombre: 'Anderson Cifuentes',
    titulo: 'Curso de node',
  });
});
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Anderson Cifuentes',
    titulo: 'Curso de node',
  });
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
