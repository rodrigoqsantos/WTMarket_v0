const router = require('express').Router();
const app = require('../index');
const connection = require('../database/connection');

app.get('api/categorias', async (req, res) => {
    const resposta = await connection.query('SELECT * FROM categoria');

    return res.send(resposta);
})