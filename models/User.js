var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: { type: String, index: true },

})
