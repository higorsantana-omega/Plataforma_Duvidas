const Sequelize = require('sequelize')

const connection = new Sequelize('plataformaperguntas', 'root', 'red12mov', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;