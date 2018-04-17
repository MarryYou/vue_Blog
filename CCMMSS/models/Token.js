var mongoose = require('mongoose');
var tokenSchema = require('../schemas/token');
module.exports = mongoose.model('Token',tokenSchema);
