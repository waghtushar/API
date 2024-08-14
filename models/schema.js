const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const userDB = mongoose.model('userTbl', userSchema)

module.exports = userDB