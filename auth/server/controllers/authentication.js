const jwt = require('jwt-simple')
const User = require('../models/user')
const config = require('../config')

function tokenForUser(user) {
  const timestamp = new Date().getTime()
  // `sub` stands for Subject, meaning "who is this token about / who does it belong to"
  // `iat` stands for Issued At Time
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

exports.signup = function(req, res, next) {
  const { email, password } = req.body

  if (!email || !password) {
    // 422: Unprocessable entity
    return res.status(422).send({ error: 'You must provide email and password' })
  }

  // See if a user with the given email exists
  User.findOne({ email }, function(error, existingUser) {
    if (error) {
      return next(error)
    }

    // If it does (so existing email), return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' })
    }

    // If it doesn't (so new email), create and save user record
    const user = new User({ email, password })
    user.save(function(error) {
      if (error) {
        return next(error)
      }
      // Respond to request indicating the user was created
      res.json({ token: tokenForUser(user) })
    })

  })
}

exports.signin = function(req, res, next) {
  // User has already had their email and password authenticated. We just need to give them a token
  res.send({ token: tokenForUser(req.user) })
}
