const authentificationController = require('./controllers/AuthentificationController')
const authentificationControllerPolicy = require('./controllers/AuthentificationControllerPolicy')

module.exports = (app) => {
  app.post('/register', authentificationControllerPolicy.register, authentificationController.register)
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
