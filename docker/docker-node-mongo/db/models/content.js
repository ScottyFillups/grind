const mongoose = require('mongoose')
const contentSchema = require('../schemas/content')

module.exports = mongoose.model('content', contentSchema)
