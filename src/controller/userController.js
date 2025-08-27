const userModel = require('../model/userModel')

//Controlador para listar todos os usuários
const getAllUsers = (req, res) => {
    const users = userModel.findAll()
    res.status(200).json(users)
}

const getUserById = (req, res) => {
    const user = userModel.findById()
    res.status(200).json(user)
}

//Controlador para criar um novo usuário
const createUser = (req, res) => {
    const {name, email} = req.body

    if (!name || !email) {
        return res.status(400).json({
            massage: "Nome e email são obrigatórios"
        })
    }

    const newUser = userModel.create({name, email});
    res.status(201).json(newUser)

}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}