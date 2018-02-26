const { Router } = require('express')
const content = require('./content')
const home = require('./home')
const num = require('./num')

const router = Router()

router.use('/', home)
router.use('/content', content)
router.use('/num', num)

module.exports = router
