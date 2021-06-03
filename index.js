let express = require('express'), // Importar express
    app     = express(), // Instanciar express
    port = parseInt(process.env.PORT, 10) || 8080;

let bodyParser = require('body-parser'); // Importar bodyparser || é usado para receber formulario
app.use(bodyParser.urlencoded({ extended: false }));

const connection = require('./database/database')
connection
    .authenticate()
    // promisse
    .then(() => {
        console.log("Conexão feita")
    })
    .catch((err) => {
        console.log('Erro banco de dados')
    })

// Importar tabela 
const perguntaModel = require("./database/Pergunta")

// Ouvir na porta
// E exibir o que aparecera
app.listen(port, () => {
    console.log("Rodando")
})

app.set('view engine', 'ejs') // Setar o motor de visu como ejs
app.use(express.static('public')) // Usar arquivos estaticos


//  Body parser 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// ===== rotas ===== 

// Resposta e requirição
app.get("/", (req, res) => {
    // Renderizar o ejs 
    res.render("index")
})

app.get("/perguntar", (req, res) => {
    // Renderizar o ejs 
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    let titulo = req.body.titulo; // Receber valor do input titulo
    let descricao = req.body.descricao; // Receber valor do textarea descricao
    res.send("Formulario recebido " + titulo + " " + "descricao " + descricao)
})

