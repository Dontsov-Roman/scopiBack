const express = require('express')
const cors = require('cors')
const countries = require('./countries')

const app = express()
app.use(cors())
app.options('*', cors())
app.get('/', (req, res) => res.send(countries))

app.listen(8080)
