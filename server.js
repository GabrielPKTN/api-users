
//Importar módulo do express
const express = require('express')

//Importa as rotas de usuário
const userRoutes = require('./src/routes/userRoutes')

//Criar uma aplicação express
const app = express()

//Definir um Middleware para analisar JSON no corpo das requisições
app.use(express.json)

//Definir a porta em que o servidor ira escutar
const porta = 8000

//Definir a rota de teste da API
app.get('/', (req, res) => {
    res.send("API de Usuários está funcionando")
})

//Usando as rotas de usuário
app.use('/api/users', userRoutes)

//Inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})