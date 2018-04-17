var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
	username:String,
	createtime:String,
    content:String,
    avatar:String,
    isAdmin:{
    	type:Boolean,
    	default:false
    }
})
