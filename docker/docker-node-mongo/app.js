const mongoose = require('mongoose')
const express = require('express')
const fileUpload = require('express-fileupload')
const routes = require('./routes/index')

const app = express()
const port = process.env.PORT || 8080

mongoose.connect('mongodb://mongo:27017')
app.use(fileUpload())
app.use(routes)

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Example app listening on port ${port}`)
})
