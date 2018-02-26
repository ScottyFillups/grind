const mongoose = require('mongoose')
const numSchema = require('../schemas/nums')

module.exports = mongoose.model('nums', numSchema)
