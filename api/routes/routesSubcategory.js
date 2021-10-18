const routesSubcategory = require('express').Router();
const Subcategory = require('../models/Subcategory');

//Ver todas subcategorias
routesSubcategory.get('/', async (req, res) => {
    await Subcategory.showAll(res);
});

//Ver subcategoria por ID - READ
routesSubcategory.get('/:id', async (req, res) => {
    const id = req.params.id;
    await Subcategory.searchById(id, res);
});

//Criar nova subcategoria - CREATE
routesSubcategory.post('/', async (req, res) => {
    const nome = req.body.nome;
    const idCategoria = req.body.idCategoria;
    await Subcategory.add(nome, idCategoria, res);
});

//Atualizar subcategoria - UPDATE
routesSubcategory.patch('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const values = req.body;

    await Subcategory.update(id, values, res);
});

//Deletar subcategoria de forma lógica - DELETE
routesSubcategory.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    await Subcategory.delete(id, res);
});

module.exports = routesSubcategory;