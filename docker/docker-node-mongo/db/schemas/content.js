const mongoose = require('mongoose')

const contentSchema = mongoose.Schema({
  filename: String
})

module.exports = contentSchema
