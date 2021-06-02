const express = require("express") // Importar o express
const app = express() // Atribuir para app

app.set('view engine', 'ejs') // Setar o motor de visu como ejs
app.use(express.static('public')) // Usar arquivos estaticos


// Resposta e requirição
app.get("/", (req, res) => {
    // Renderizar o ejs 
    res.render("index")
})

app.get("/perguntar", (req, res) => {
    // Renderizar o ejs 
    res.render("perguntar")
})

app.listen(8080, () => {
    console.log("Rodando")
})