
const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

//Rota para obter todos os usuários
router.get('/', userController.getAllUsers)

//Rota para obter usuário por ID
router.get('/:id', userController.getUserById)

//Rota para criar um novo usuário
router.post('/', userController.createUser)

module.exports = router