const User = require('../models/user')

exports.signup = function(req, res, next) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' })
  }

  // See if a user with the given email exists
  User.findOne({ email }, function(error, existingUser) {
    if (error) {
      return next(error)
    }

    // If it does (so existing email), return an error
    if (existingUser) {
      // 422: Unprocessable entity
      return res.status(422).send({ error: 'Email is in use' })
    }

    // If it doesn't (so new email), create and save user record
    const user = new User({ email, password })
    user.save(function(error) {
      if (error) {
        return next(error)
      }
      // Respond to request indicating the user was created
      res.json({ success: true })
    })

  })
}
