const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const Num = require('./db/models/nums')

mongoose.connect('mongodb://mongo:27017')

const app = express()
const port = process.env.PORT || 8080
const db = mongoose.connection

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/gen', (req, res) => {
  const num = new Num({ num: Math.random() })
  num.save((err, num) => {
    res.send('New number generated and saved!')
  })
})

app.get('/fetch', (req, res) => {
  Num.find((err, nums) => {
    res.send(nums)
  })
})

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Example app listening on port ${port}`)
})
