module.exports = (app) => {
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
}
