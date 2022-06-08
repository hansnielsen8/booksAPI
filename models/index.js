const mongoose = require('mongoose')
require('dotenv').config()

// DB CONNECT
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB Connected'))
    .catch(err => console.error(err));

module.exports.Book = require('./book')