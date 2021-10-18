const routes = require('express').Router();

//CATEGORIA
const routesCategory = require('./routesCategory');
routes.use('/categoria', routesCategory);

//SUBCATEGORIA
const routesSubcategory = require('./routesSubcategory');
routes.use('/subcategoria', routesSubcategory);

module.exports = routes;