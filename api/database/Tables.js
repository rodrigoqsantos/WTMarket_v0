const connection = require("./connection");

class Tables {
    init(connection) {
        //Conexão
        this._connection = connection;
        //Criação das tabelas
        this._createCategory();
        this._createSubcategory();
        this._createUFTable();
        this._createCDTable();
        this._createProduct();
        this._createProduct_CD();
    }

    _createCategory() {
        const sql = 'CREATE TABLE IF NOT EXISTS categoria (idCategoria int NOT NULL AUTO_INCREMENT, nome varchar(128) NOT NULL, dataCriacao datetime NOT NULL, dataAtualizacao datetime NOT NULL, enabled varchar(1) NOT NULL, PRIMARY KEY(idCategoria))'

        connection.query(sql, err => {
            if(err) {
                console.log(err);
            } else {
                console.log('Tabela de categoria criada com sucesso');
            }
        });
    }

    _createSubcategory() {
        const sql = 'CREATE TABLE IF NOT EXISTS subcategoria (idSubcategoria int NOT NULL AUTO_INCREMENT, nome varchar(128) NOT NULL, idCategoria int NOT NULL, dataCriacao datetime NOT NULL, dataAtualizacao datetime NOT NULL, enabled varchar(1) NOT NULL, PRIMARY KEY(idSubcategoria), FOREIGN KEY (idCategoria) REFERENCES categoria(idCategoria))'

        connection.query(sql, err => {
            if(err) {
                console.log(err);
            } else {
                console.log('Tabela de subcategoria criada com sucesso');
            }
        });
    }

    _createUFTable() {
        const sql = 'CREATE TABLE IF NOT EXISTS uf (idUF int NOT NULL AUTO_INCREMENT, sigla varchar(2) NOT NULL, nome varchar(50) NOT NULL, PRIMARY KEY (idUF))'
        
        connection.query(sql, err => {
            if(err) {
                console.log(err);
            } else {
                console.log('Tabela de UF criada com sucesso');
            }
        });
    }

    _createCDTable() {
        const sql = 'CREATE TABLE IF NOT EXISTS centro_distribuicao (idCD int NOT NULL AUTO_INCREMENT, nome varchar(128) NOT NULL, logradouro varchar(256) NOT NULL, numero int NOT NULL, complemento varchar(128), bairro varchar(128) NOT NULL, cidade varchar(128) NOT NULL, idUF int NOT NULL, cep varchar(8) NOT NULL, dataCriacao datetime NOT NULL, dataAtualizacao datetime NOT NULL, enabled varchar(1) NOT NULL, PRIMARY KEY(idCD), FOREIGN KEY (idUF) REFERENCES uf(idUF))'
    
        connection.query(sql, err => {
            if(err) {
                console.log(err);
            } else {
                console.log('Tabela de centro de distribuição criada com sucesso');
            }
        });
    }

    _createProduct() {
        const sql = 'CREATE TABLE IF NOT EXISTS produto (idProduto int NOT NULL AUTO_INCREMENT, nome varchar(128) NOT NULL, peso decimal(18,2) NOT NULL, altura decimal(18,2) NOT NULL, largura decimal(18,2) NOT NULL, comprimento decimal(18,2) NOT NULL, preco decimal(18,2) NOT NULL, quantidadeEmEstoque int NOT NULL, idCD int NOT NULL, idSubcategoria int NOT NULL, dataCriacao datetime NOT NULL, dataAtualizacao datetime NOT NULL, enabled varchar(1) NOT NULL, PRIMARY KEY (idProduto), CONSTRAINT FK_CDProduto FOREIGN KEY (idCD) REFERENCES centro_distribuicao(idCD), CONSTRAINT FK_SubcategoriaProduto FOREIGN KEY (idSubcategoria) REFERENCES subcategoria(idSubcategoria))'
    
        connection.query(sql, err => {
            if(err) {
                console.log(err);
            } else {
                console.log('Tabela de produto criada com sucesso');
            }
        });
    }

    _createProduct_CD() {
        const sql = 'CREATE TABLE IF NOT EXISTS produto_cd (idProduto int NOT NULL, idCD int NOT NULL, CONSTRAINT FK_produto_cdProduto FOREIGN KEY (idProduto) REFERENCES produto(idProduto), CONSTRAINT FK_produto_cdCD FOREIGN KEY (idCD) REFERENCES centro_distribuicao(idCD))';
    
        connection.query(sql, err => {
            if(err) {
                console.log(err);
            } else {
                console.log('Tabela de relacionamento de centro de distribuição com categoria criada com sucesso');
            }
        });
    }
}

module.exports = new Tables();