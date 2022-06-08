const mongoose = require('mongoose')

//Create bookSchema (mongoose)

let bookSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    year: { type: Number },
    quantity: { type: Number },
    imageURL: { type: String }
})

module.exports = mongoose.model('Book', bookSchema)