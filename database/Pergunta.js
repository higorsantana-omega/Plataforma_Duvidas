const Sequelize = require("sequelize")
const connection = require("./database")


// Model
// O model serve para representar uma tabela sql
// com codigo js
const Pergunta = connection.define('perguntas', {
    // Model atributos
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
        // Por padrao o allowNull é true, ou seja, permite campos vazios
    }
}, {
    // opções
})

Pergunta.sync({ force: false }).then(() => {
    console.log('Tabela criada')
})