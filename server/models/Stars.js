const mongoose = require('mongoose');

const StarsSchema = new mongoose.Schema({  
  rel: {type: mongoose.Schema.Types.ObjectId, ref:'Phone'}
});

const Stars = mongoose.model('Stars', StarsSchema);

module.exports = Stars;