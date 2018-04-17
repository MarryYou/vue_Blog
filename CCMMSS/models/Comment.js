var mongoose = require('mongoose');
var CommentSchema = require('../schemas/comments');
module.exports = mongoose.model('Comment',CommentSchema);
