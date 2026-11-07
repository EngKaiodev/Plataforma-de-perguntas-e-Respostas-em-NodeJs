const Sequelize = require('sequelize');

const conection = new Sequelize('guiaperguntas', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = conection;