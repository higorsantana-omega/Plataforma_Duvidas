const express = require("express") // Importar o express
const app = express() // Atribuir para app

app.set('view engine', 'ejs') // Setar o motor de visu como ejs
app.use(express.static('public')) // Usar arquivos estaticos


// Resposta e requirição
app.get("/:nome/:lang", (req, res) => {
    let nome = req.params.nome
    let language = req.params.lang
    var exibirMsg = false;

    let produto = [
        {nome: 'Leite', preco: 1.69},
        {nome: 'Laranjas', preco: 2.69},
        {nome: 'Frango', preco: 39.69}
    ]
    // Renderizar o ejs 
    res.render("index", {
        // Uso de variaveis
        nome: nome,
        language: language,
        inscritos: 2018,
        msg: exibirMsg,
        produtos: produto
    })
})

app.listen(8080, () => {
    console.log("Rodando")
})