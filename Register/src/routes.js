const express = require('express')
const router = express.Router()
const index = require('./controllers/index')

router.get('/', index.get )
router.post('/register',index.post)


module.exports = router