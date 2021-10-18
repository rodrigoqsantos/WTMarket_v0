const app = require('./config/custom-express');
const connection = require('./database/connection');
const Tables = require('./database/Tables');

connection.connect(err => {
    if(err){
        console.log(err);
    } else {
        console.log('Conectado com sucesso');

        Tables.init(connection);
        
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    }
});