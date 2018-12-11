// Configuration file to set our app to use the Passport.js library

const passport = require('passport')
const LocalStrategy = require('passport-local')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/user')
const config = require('../config')

// Create local strategy (used for verifying a sign in request made with a username [email in our case] and a password)
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify this email and password
  // If valid, call `done` with the email
  // Otherwise, call `done` with false
  User.findOne({ email }, function(error, user) {
    if (error) {
      return done(error)
    }

    if (!user) {
      return done(null, false)
    }

    // Compare passwords: is `password` equal to `user.password`?
    user.comparePassword(password, function(error, isMatch) {
      if (error) {
        return done(error)
      }

      if (!isMatch) {
        return done(null, false)
      }

      return done(null, user)
    })
  })
})

// Tell passport to use this strategy
passport.use(localLogin)

// Create JWT strategy (used for verifying an authenticated request request made with a token in the `authorization` header)
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  User.findById(payload.sub, function(error, user) {
    // We would get an error in cases like when we don't have access to the db
    if (error) {
      return done(error, false)
    }
    // If it does, call `done` with that user, meaning the user is authenticated and should be allowed to log in
    // Otherwise, call `done` without a user object, meaning the user is NOT authenticated and should NOT be allowed to log in
    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
})

// Tell passport to use this strategy
passport.use(jwtLogin)
