const express = require('express');
const bodyParser = require('body-parser');
const router = require('../routes');

const middlewares = require('../middlewares');

const app = express();
app.use(bodyParser.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/', router.users);

// uso o erro sem ter que passar uma função aqui
app.use(middlewares.error);

module.exports = app;
