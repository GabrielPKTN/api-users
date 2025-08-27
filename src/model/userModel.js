

//Simulação de um banco de dados em memória
let users = [
    {
        id: 1,
        name: 'Alice',
        email: 'alice@gmail.com'
    },
    {
        id: 2,
        name: 'Robertovski',
        email: 'robertovski@gmail.com'
    },
    {
        id: 3,
        name: 'Leandrovski',
        email: 'leandrovski@gmail.com'
    }
]


// Função para buscar todos os usuários
const findAll = () => {
    return users
}

// Função para buscar um usuário por ID
const findById = (id) => {
    return users.find(user => user.id === id)
}

//Função que adiciona um novo usuário
const create = (newUser) => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1
    
    const userWithId = {
        id: newId,
        ...newUser
    }
    
    users.push(userWithId)

    return userWithId
}

//Exportando funções
module.exports = {
    findAll,
    findById,
    create
}