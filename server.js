
//Importar módulo do express
const express = require('express')

//Criar uma aplicação express
const app = express()

//Definir a porta em que o servidor ira escutar
const porta = 8000

//Definir a rota de teste da API
app.get('/', (req, res) => {
    res.send("API de Usuários está funcionando")
})

//Inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})