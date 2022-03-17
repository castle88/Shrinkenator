const express = require('express')
require('dotenv').config({ path: './config/.env' })
const port = process.env.PORT || 2121
const linkRoutes = require('./routes/linkRoutes')
const connectDB = require('./config/database')

const app = express()
connectDB()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

<<<<<<< HEAD
=======

>>>>>>> d-8
app.use('/link', linkRoutes)

app.listen(port, () => console.log(`Server running port: ${port}`))