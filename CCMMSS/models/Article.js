var mongoose = require('mongoose');
var ArticleSchema = require('../schemas/articles');
module.exports = mongoose.model('Article',ArticleSchema);