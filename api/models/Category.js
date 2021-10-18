const moment = require('moment');

const app = require('../config/custom-express');
const connection = require('../database/connection');

class Category {
    constructor(nome) {
        this._nome = nome;
    }

    add(nome, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const dataAtualizacao = moment().format('YYYY-MM-DD HH:MM:SS');

        const query = 'INSERT INTO categoria SET ?';
        const enabled = 1;
        const data = {nome, dataCriacao, dataAtualizacao, enabled};

        connection.query(query, data, (err, result) => {
            if(err) {
                res.status(400).json(err);
            } else {
                res.status(201).json(result);
            }
        });
    }

    showAll(res) {
        const query = 'SELECT * FROM categoria WHERE enabled = 1';

        connection.query(query, (err, result) => {
            if(err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        });
    }

    searchById(id, res) {
        const query = `SELECT * FROM categoria WHERE idCategoria = ${id}`;

        connection.query(query, (err, result) => {
            if(err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        });
    }

    update(id, values, res) {
        const updateDate = moment().format('YYYY-MM-DD HH:MM:SS');

        const query = 'UPDATE categoria SET nome=?, dataAtualizacao=?, enabled=? WHERE idCategoria = ?';

        connection.query(query, [values.nome, updateDate, values.enabled, id], (err, result) => {
            if(err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        });
    }

    delete(id, res) {
        const updateDate = moment().format('YYYY-MM-DD HH:MM:SS');

        const query = 'UPDATE categoria SET dataAtualizacao=?, enabled=0 WHERE idCategoria=?';

        connection.query(query, [updateDate, id], (err, result) => {
            if(err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        });

        const updateSubcategory = 'UPDATE subcategoria SET dataAtualizacao=?, enabled=0 WHERE idCategoria=?';
        
        connection.query(updateSubcategory, [updateDate, id], (err, result) => {
            if(err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        });
    }
}

module.exports = new Category();
