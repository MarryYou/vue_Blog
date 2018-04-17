var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose =require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/User');
var index = require('./routes/index');
var users = require('./routes/users');
var api   = require('./routes/api');
var session = require('express-session');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require("ejs").__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	secret:'Senlanqing',
	resave:true,
	saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 * 60 * 60, // 设置 session 的有效时间，单位毫秒
    }
}))
app.use(function(req, res, next){ 
res.locals.session = req.session;
next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/users', users);
app.use('/api',api);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
mongoose.connect('mongodb://localhost:27017/BlogInfo',function(err){
	if(err){
		console.log('数据库连接失败');
	}else{
		console.log('数据库连接成功');
	}
})
