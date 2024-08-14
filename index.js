const express = require('express')
const db = require('./config/database')
const user = require('./routers/router')
const port = 4282

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(user)

app.listen(port, (err) => {
    db()
    if (!err) {
        console.log("Server started at http://localhost:" + port)
    }
})