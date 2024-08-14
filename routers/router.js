const { Router } = require("express");
const { profile, deleteUser, updateUser, login, signin } = require("../controllers/controller");

const user = Router()

user.get('/', profile)
user.post('/add', signin)
user.delete('/delete/:id', deleteUser)
user.patch('/update/:id', updateUser)
user.post('/login', login)

module.exports = user