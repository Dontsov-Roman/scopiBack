const express = require('express')
const cors = require('cors')
require('dotenv').config()
const countries = require('./countries')

const app = express()
app.use(cors())
app.options('*', cors())
app.get('/', (req, res) => res.send(countries))

app.listen(process.env.API_PORT || 8080)
