const Sequelize = require('sequelize');
const connection = require('./database');

//define o nome da tabela e os campos que ela vai ter, no caso titulo e descricao
const Pergunta = connection.define('pergunta', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
    
});

// sincronizando o model com o banco de dados, caso não exista a tabela, ele cria
Pergunta.sync({force: false}).then(() => {
    console.log("Tabela criada com sucesso");
});

module.exports = Pergunta;