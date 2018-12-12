const express = require('express')
const http = require('http')
// Morgan is a logging framework middleware
const morgan = require('morgan')
// Body Parser is another middleware that is used to parse incoming requests and convert them into JSON
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router')

// DB setup
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true })

// App setup
const app = express()
app.use(morgan('combined'))
// For development purposes, we're allowing requests from any domain, subdomain and port
app.use(cors())
app.use(bodyParser.json({ type: '*/*' }))
router(app)

// Server setup
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on', port)
