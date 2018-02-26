const Content = require('../db/models/content')
const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  Content.find((err, nums) => {
    res.send(nums)
  })
})

router.get('/:filename', (req, res) => {
  const { filename } = req.params

  res.sendFile(`/data/content/${ filename }`)
})

router.post('/', (req, res) => {
  const { file } = req.files
  const fileMeta = new Content({ filename: file.name })

  Promise.all([
    file.mv(`/data/content/${ file.name }`),
    fileMeta.save()
  ]).then((arr) => {
    res.send(`${ file.name } uploaded!`)
  }).catch(console.error)
})

module.exports = router
