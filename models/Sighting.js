var mongoose = require('mongoose');

var sightingSchema = new mongoose.Schema({
  bird: { type: mongoose.Schema.Types.ObjectId, ref: 'Bird', required:true }
  confirmed: { type: Boolean, default: false },
  numberSeen: { type: Number, min: 1 }
});


module.exports = mongoose.model('Sighting', sightingSchema);
