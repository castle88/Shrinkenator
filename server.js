const express = require('express')
require('dotenv').config({ path: './config/.env' })
const port = process.env.PORT || 2121
const app = express()

app.listen(port, () => console.log(`Server running port: ${port}`))