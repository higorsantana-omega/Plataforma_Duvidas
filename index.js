let express = require('express'), // Importar express
    app     = express(), // Instanciar express
    port = parseInt(process.env.PORT, 10) || 8080;

let bodyParser = require('body-parser'); // Importar bodyparser || é usado para receber formulario
// app.use(bodyParser.urlencoded({ extended: false }));

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
const Pergunta = require("./database/Pergunta")

// Importar db de respostas
const Resposta = require("./database/Resposta")

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
    // Selecionar tudo do banco de dados
    // e percorrer todas as perguntas no banco de dados
    Pergunta.findAll({
        raw: true, order: [
        ['id', 'DESC'] // ASC = Crescente || DESC
    ] }).then(perguntas => {
        // Mandar perguntas para o frontend
        res.render("index", {
            perguntas: perguntas
        })
    })
    // Renderizar o ejs 
})

app.get("/perguntar", (req, res) => {
    // Renderizar o ejs 
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    // Receber dados do formulario e armazenar nas variaveis
    let titulo = req.body.titulo; // Receber valor do input titulo
    let descricao = req.body.descricao; // Receber valor do textarea descricao
    // Salvar no banco de dados
    // INSERT
    Pergunta.create({
        // Dados que vem das variaveis acima
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        // Redirecionar o usuario para a pag principal
        res.redirect("/")
    })
})

app.get("/pergunta/:id", (req, res) => {
    let id = req.params.id;
    // procurar a id no banco de dados
    Pergunta.findOne({
        // id que seja igual a passada pelo usuario
        where: { id: id }
        // apos procurar
    }).then(pergunta => {
        if (pergunta != undefined) { // Caso a pergunta seja encontrada
            res.render("pergunta", {
                pergunta: pergunta
            })
        } else { // Se ela não for encontrada...
            res.redirect("/")
        }
    })
})



