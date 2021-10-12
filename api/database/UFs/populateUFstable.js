const connection = require('../connection');
const array = require('./UFs.json');;
const UFs = [];

let id = 1;

array.forEach(element => {
    UFs.push({id: id, sigla: element.sigla, nome: element.nome});
    id++;
});

UFs.forEach(element => {

    connection.query(`INSERT INTO uf (idUF, sigla, nome) VALUES ('${element.id}','${element.sigla}', '${element.nome}')`);

});