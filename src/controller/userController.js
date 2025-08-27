const userModel = require('../model/userModel')

//Controlador para listar todos os usuários
const getAllUsers = (req, res) => {
    const users = userModel.findAll()
    res.status(200).json(users)
}

module.exports = {
    getAllUsers
}