var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Token = require('../models/Token');
var Comment = require('../models/Comment');
var Article = require('../models/Article');
var sha1 = require('sha1');
var defaultAvatar = require('../public/javascripts/defaultAvatar');
var responseData;
var moment = require('moment');
router.use(function(req, res, next) {
	responseData = {
		code: 0,
		message: ''
	}
	next();
})
/* GET home page. */
router.get('/signup', function(req, res, next) {
	//res.render('index', { title: 'Express' });
	var a = sha1('get');
	res.send(a)
});
router.post('/signup', function(req, res, next) {
	const name = req.body.username,
		repassword = req.body.repwd;
	let password = req.body.pwd,
		isAdmin = false,
		avatar = req.body.avatar;
	if(!(name.length > 1 && name.length <= 11)) {
		responseData.code = 1;
		responseData.message = '名字限制在1 - 10 个字符内';
		res.send(responseData);
		return;
	}
	if(!(password.length >= 6 && name.length <= 14)) {
		responseData.code = 2;
		responseData.message = '密码限制在6 - 14 个字符内';
		res.send(responseData);
		return;
	}
	if(password !== repassword) {
		responseData.code = 3;
		responseData.message = '两次输入密码不一致';
		res.send(responseData);
		return;
	}
	if(avatar === 'default') {
		avatar = defaultAvatar;
		req.body.avatar = defaultAvatar;
	}
	if(name == 'admin' && password == 'fht.1234') {
		isAdmin = true;
	}
	User.findOne({
		username: name
	}).then(function(info) {
		if(info) {
			responseData.code = 4;
			responseData.message = '用户已注册';
			res.send(responseData);
			return;
		}
		var user = new User({
			username: name,
			password: password,
			avatar: avatar,
			isAdmin: isAdmin
		});
		return user.save();
	}).then(function(newInfo) {
		responseData.code = 0;
		responseData.message = '注册成功';
		res.send(responseData);
	})
	//	next();
})
router.post('/signin', function(req, res, next) {
	const name = req.body.username,
		password = req.body.pwd;
	let isAdmin = false;
	let avatar = ''
	User.findOne({
		username: name
	}).then(function(info) {
		//		console.log(info)
		if(info.isAdmin) {
			isAdmin = true;
		}
		avatar = info.avatar;
		if(name != info.username || password != info.password) {
			responseData.code = 1;
			responseData.message = '用户名或密码错误';
			res.send(responseData);
			return;
		}
	}).then(function(){
			Token.findOne({
				username: name
			}).then(function(info) {
				if(info) {
					Token.remove({
						username: name
					}, function(err, docs) {
						if(err) console.log(err);
						console.log('删除成功' + docs);
					})
				}
			}).then(function() {
				let privateToken = sha1(name + Date.now());
				let TokenData = new Token({
					username: name,
					token: privateToken
				});
				responseData.code = 0;
				responseData.message = '登录成功';
				responseData.token = privateToken;
				responseData.isAdmin = isAdmin;
				responseData.avatar  = avatar;
				res.send(responseData);
				return TokenData.save();
			})
	})

})
router.post('/signout', function(req, res, next) {
	const token = req.body.token,
		name = req.body.username;
	Token.findOne({
		username: name
	}).then(function(info) {
		if(info.token === token) {
			Token.remove({
				username: name
			}, function(err, docs) {
				if(err) {
					responseData.code = 1;
					responseData.message = '登出失败';
					res.send(responseData);
					return;
				}
				responseData.code = 0;
				responseData.message = '登出成功';
				res.send(responseData);
				console.log('登出成功' + docs);

			})
		}
	})

})
router.post('/createcomment', function(req, res, next) {
	const token = req.body.token,
		name = req.body.username,
		content = req.body.content;
	let avatar = '';
	let isAdmin = false;
	let createtime = moment(Date.now()).format('YYYY-DD-MM hh:mm:ss a');
	User.findOne({
		username: name
	}).then(function(info) {
		if(info.avatar.length > 0) {
			avatar = info.avatar;
		}
		if(info.isAdmin) {
			isAdmin = true;
		}
	}).then(function(){
Token.findOne({
		username: name
	}).then(function(info) {
		if(info.token !== token) {
			responseData.code = 0;
			responseData.message = '用户Token验证已过期';
			res.send(responseData);
			return;
		}
	}).then(function() {
		let CommentData = new Comment({
			username: name,
			content: content,
			avatar: avatar,
			createtime: createtime,
			isAdmin: isAdmin
		})
		responseData.code = 1;
		responseData.message = 'success';
		responseData.time = createtime;
		res.send(responseData);
		return CommentData.save();
	})
	})


})
router.get('/comment', function(req, res, next) {
	Comment.find({},function(err,info){
		if(err){
		responseData.code = 0;
		responseData.message = 'error';
		res.send(responseData)
		return;
		}
		responseData.code = 1;
		responseData.message = 'success';
		responseData.comment = info;
		res.send(responseData)
	})	
})
router.post('/createArticle',function(req,res,next){
	const             name = req.body.username,
	                content = req.body.content,
	      articletitle = req.body.articletitle,
	      desc         = req.body.desc,
	      articletype  = req.body.articletype;
	let createtime = moment(Date.now()).format('YYYY-MM-DD hh:mm:ss a');      
	User.findOne({
		username:name
	}).then(function(info){
		if(info.username !== 'admin'){
		responseData.code =0;
	    responseData.message = 'error';
		res.send(responseData)
		return ;
		}
	}).then(function(){
		let articleData = new Article({
			username:name,
			content:content,
			articletitle:articletitle,
			articletype :articletype,
			createtime  : createtime,
			desc        : desc
		});
		responseData.code = 1;
		responseData.message = 'success';
		responseData.time = createtime;
		res.send(responseData);
		return articleData.save();
	})
})

router.get('/article',function(req,res,next){
	Article.find({},function(err,docs){
	 if(err){
		responseData.code = 0;
		responseData.message = 'error';
		res.send(responseData)
		return;
		}
		responseData.code = 1;
		responseData.message = 'success';
		responseData.article = docs;
		res.send(responseData)
	})
})
router.get('/updatePV/:title',function(req,res,next){
	const articletitle = decodeURI(req.params.title)	
//	res.send(articletitle)
//	console.log()
	Article.findOne({
		articletitle:articletitle
	}).then(function(info){
		if(!info)return;
		info.PV++;
		var updates = {$set: {PV: info.PV}};
		Article.update({articletitle:articletitle},updates,function(error){
		 if (error) {  
		        console.error(error);  
		    } else {  
		        console.error("更新用户名成功")  
		    }  
		})
	    responseData.code = 1;
		responseData.message = 'success';
		responseData.PV = info.PV;
		res.send(responseData)
	})
})
module.exports = router;