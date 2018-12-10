const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const Schema = mongoose.Schema

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
})

// On save hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next) {
  // Get access to the user model (user.email, user.password)
  const user = this

  // Generate salt, then run callback
  bcrypt.genSalt(10, function(error, salt) {
    if (error) {
      return next(error)
    }

    // Hash our password using the salt, then run callback
    bcrypt.hash(user.password, salt, null, function(error, hash) {
      if (error) {
        return next(error)
      }

      // Overwrite plain text password with encrypted password
      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  // Compare the candidate password to our salted hashed password
  bcrypt.compare(candidatePassword, this.password, function(error, isMatch) {
    if (error) {
      return callback(error)
    }

    callback(null, isMatch)
  })
}

// Create the model class
const ModelClass = mongoose.model('user', userSchema)

// Export the model
module.exports = ModelClass
