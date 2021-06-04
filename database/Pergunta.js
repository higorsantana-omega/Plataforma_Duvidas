const Sequelize = require("sequelize")
const connection = require("./database")


// Model
// O model serve para representar uma tabela sql
// com codigo js
const Pergunta = connection.define('perguntas', {
    // Model atributos
    // nome da row
    titulo: {
        // tipo do campo
        // strings para textos curtos
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        // text é para textos longos
        type: Sequelize.TEXT,
        allowNull: false
        // Por padrao o allowNull é true, ou seja, permite campos vazios
    }
}, {
    // opções
})

// sincronizar com o banco de dados
// force -> se a tabela ja existir
Pergunta.sync({ force: false }).then(() => {
    console.log('Tabela criada')
})

// exportar
module.exports = Pergunta