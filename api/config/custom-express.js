const express = require('express');
const app = express();

const routes = require('../routes/routes');

app.use(express.json());
//app.use(express.urlencoded({extended: true}));

app.use('/api', routes);

module.exports = app;