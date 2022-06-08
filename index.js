const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const bookRoutes = require('./controllers/books')
const PORT = process.env.PORT || 3000
//Require cors
const cors = require('cors')

const app = express()
//Instantiate cors
app.use(cors())
app.use(express.json())

app.use('/books', bookRoutes)

app.listen(PORT, () => console.log(`Live on port ${PORT}`))