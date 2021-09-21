const express = require('express');

const app = express();

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

const bodyParser = require('body-parser');
const usersRouter = require('../routes/users');
const loginRouter = require('../routes/login');
const { error } = require('../middlewares/error');

app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.use(error);

module.exports = app;
