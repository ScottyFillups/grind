const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/random', (req, res) => {
  res.status(200).send({ num: Math.random() })
})

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Server listening on port ${port}`)
})
