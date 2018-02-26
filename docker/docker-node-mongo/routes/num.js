const mongoose = require('mongoose')
const { Router } = require('express')
const Num = require('../db/models/nums')

const router = Router()

router.get('/', (req, res) => {
  Num.find((err, nums) => {
    res.send(nums)
  })
})

router.get('/gen', (req, res) => {
  const num = new Num({ num: Math.random() })

  num.save((err, num) => {
    res.send('New number generated and saved!')
  })
})

module.exports = router
