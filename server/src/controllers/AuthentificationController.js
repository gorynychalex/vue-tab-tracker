const {User} = require('../models')

module.exports = {
  async register (req, res) {
      try {
        const user = await User.create(req.body)
        //const user = await User.findOne()
	console.log(user.toJSON())
	console.log(req.body)
        res.send(user.toJSON())
      } catch (err) {
        // other errors
        res.status(400).send({
          error: 'This email account is already in use.'
        })
      }
  }
}

/*
module.exports = {
  register (req, res) {
    res.send({
      message: `Hello ${req.body.email} !`
    })
  }
}
*/
