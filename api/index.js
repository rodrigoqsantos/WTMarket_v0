const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');

app.use(bodyParser.json());

const router = require('./rotas/rotas');
const connection = require('./database/connection');

//app.use('', router);

app.listen(config.get('api.porta'), () => console.log('A API está funcionando!'));

module.exports = app;