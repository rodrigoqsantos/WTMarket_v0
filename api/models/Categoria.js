const moment = require('moment');

const connection = require('../database/connection');

class Categoria {
    constructor(nome) {
        this._nome = nome;
    }

    adiciona(nome) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const dataAtualizacao = dataCriacao;

        connection.query(`INSERT INTO categoria (name) VALUES (${nome})`);
    }
}

module.exports = new Categoria;