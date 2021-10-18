const routesCategory = require('express').Router();
const Category = require('../models/Category');

//Ver todas categorias
routesCategory.get('/', async (req, res) => {
    await Category.showAll(res);
});

//Ver categoria por ID - READ
routesCategory.get('/:id', async (req, res) => {
    const id = req.params.id;
    await Category.searchById(id, res);
});

//Criar nova categoria - CREATE
routesCategory.post('/', async (req, res) => {
    const nome = req.body.nome; 
    await Category.add(nome, res);
});

//Atualizar categoria - UPDATE
routesCategory.patch('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const values = req.body;

    await Category.update(id, values, res);
});

//Deletar categoria de forma lógica - DELETE
routesCategory.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    await Category.delete(id, res);
});

module.exports = routesCategory;