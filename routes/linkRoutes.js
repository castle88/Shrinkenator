const express = require('express')
const router = express.Router()
const { getLink, postLink } = require('../controller/linkController')

router.get('/:id', getLink)

router.post('/', postLink)

module.exports = router