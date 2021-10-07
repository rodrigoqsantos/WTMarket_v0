const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');

app.use(bodyParser.jason());

const router = require('./routes/router');

//app.use('', router);

app.listen(config.get('api.porta'), () => console.log('A API está funcionando!'));