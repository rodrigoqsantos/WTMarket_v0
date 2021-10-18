const mysql = require('mysql');

connection = mysql.createConnection({
    hots: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'wtmarket'
});

module.exports = connection;