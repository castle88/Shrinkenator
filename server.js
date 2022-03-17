const express = require('express')
require('dotenv').config({ path: './config/.env' })
const port = process.env.PORT || 2121
const app = express()
const homeRoutes = require('./routes/homeRoutes')
const linkRoutes = require('./routes/linkRoutes')

app.listen(port, () => console.log(`Server running port: ${port}`))