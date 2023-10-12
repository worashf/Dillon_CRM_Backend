const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter your name'],
    maxLength: [30, 'Your name cannot bet exceed 30 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
  },

  role: {
    type: String,
    default: 'sale', // sale. manager, save_supervior
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },

});



module.exports = mongoose.model('user', userSchema);