const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'wtmarket_v0'
})

connection.connect(erro => {
    if(erro) {
        throw erro;
    } else {
        console.log('Conectado ao banco de dados!');
    }
})

module.exports = connection;