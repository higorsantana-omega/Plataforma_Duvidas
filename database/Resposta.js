const Sequelize = require("sequelize")
const connection = require("./database")

// Criar bd respostas
const Resposta = connection.define("respostas", {
    // Parte que diz respeito ao texto
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    // Id da pergunta
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

// Sincronizar bd
Resposta.sync({ force: false })

// Exportar
module.exports = Resposta