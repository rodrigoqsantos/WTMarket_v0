const moment = require('moment');

const app = require('../config/custom-express');
const connection = require('../database/connection');

class Subcategory {
    constructor(nome, idCategoria) {
        this._nome = nome;
        this._idCategoria = idCategoria;
    }

    add(nome, idCategoria, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const dataAtualizacao = moment().format('YYYY-MM-DD HH:MM:SS');

        const query = 'INSERT INTO subcategoria SET ?';
        const enabled = 1;
        const data = {nome, idCategoria, dataCriacao, dataAtualizacao, enabled};

        connection.query(query, data, (err, result) => {
            if(err) {
                res.status(400).json(err);
            } else {
                res.status(201).json(result);
            }
        });
    }

    showAll(res) {
        const query = 'SELECT * FROM subcategoria WHERE enabled = 1';

        connection.query(query, (err, result) => {
            if(err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        });
    }

    searchById(id, res) {
        const query = `SELECT * FROM subcategoria WHERE idSubcategoria = ${id}`;

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

        const query = 'UPDATE subcategoria SET nome=?, idCategoria=?, dataAtualizacao=?, enabled=? WHERE idSubcategoria = ?';

        connection.query(query, [values.nome, values.idCategoria, updateDate, values.enabled, id], (err, result) => {
            if(err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        });
    }

    delete(id, res) {
        const updateDate = moment().format('YYYY-MM-DD HH:MM:SS');

        const query = 'UPDATE subcategoria SET dataAtualizacao=?, enabled=0 WHERE idSubcategoria=?';

        connection.query(query, [updateDate, id], (err, result) => {
            if(err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        });
    }

}

module.exports = new Subcategory();