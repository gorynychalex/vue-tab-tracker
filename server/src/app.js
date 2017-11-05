console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    'message': `Hello ${req.body.email}! your user was register!`
  })
})

app.get('/hello', (req, res) => {
  res.send({
    'message': 'hello world!'
  })
})

app.get('/status', (req, res) => {
  res.send({
    'message': 'status'
  })
})

app.listen(process.env.PORT || 8082)
