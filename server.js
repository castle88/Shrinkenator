const express = require('express')
require('dotenv').config({ path: './config/.env' })
const port = process.env.PORT || 2121
const homeRoutes = require('./routes/homeRoutes')
const linkRoutes = require('./routes/linkRoutes')
const connectDB = require('./config/database')

const app = express()
connectDB()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/link', linkRoutes)

app.listen(port, () => console.log(`Server running port: ${port}`))