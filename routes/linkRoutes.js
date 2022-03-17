const express = require('express')
const router = express.Router()
const { getLink } = require('../controller/linkController')

router.get('/:id', getLink)