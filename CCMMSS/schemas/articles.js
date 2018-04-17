var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
	username:String,
	createtime:String,
    content:String,
    articletitle:String,
    articletype:String,
    desc:String,
    PV:{
    	type:Number,
    	default:0
    }
})
