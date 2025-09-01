const userModel = require('../model/userModel')

//Controlador para listar todos os usuários
const getAllUsers = (req, res) => {
    const users = userModel.findAll()
    res.status(200).json(users)
}

// Pesquisa de usuário pelo id
const getUserById = (req, res) => {

    const {id} = req.params

    const user = userModel.findById(Number(id))

    if(user) {
        res.status(200).json(user)
    } else {
        return res.status(404).json({
            message: "Usuário não encontrado"
        })
    }

}

//Controlador para criar um novo usuário
const createUser = (req, res) => {

    const {name, email} = req.body

    if (!name || !email) {
        return res.status(400).json({
            message: "Nome e email são obrigatórios"
        })
    } else {
        const newUser = userModel.create({name, email})
        res.status(201).json(newUser)

    }

}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}