var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');

//导入路由
var homeRouter = require('./routes/home');
var gridRouter = require('./routes/grid');
var designRouter = require('./routes/design');
var designerRouter = require('./routes/designer');
var homeRouter = require('./routes/home');
var gridRouter = require('./routes/grid');
var designRouter = require('./routes/design');
var loginRouter = require('./routes/login')
var messageRouter = require('./routes/message');


// 第一步, 连接数据库
mongoose.connect('mongodb://42.192.149.116:27017/vue3', { useNewUrlParser: true, useUnifiedTopology: true });

// 判断是否连接成功
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('数据库连接成功');
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 使用cors模块解决跨域，需要执行以下
app.use(cors());
//使用路由
app.use('/index', homeRouter);
app.use('/index', gridRouter);
app.use('/index', designRouter);
app.use('/index', designerRouter);
app.use('/index', homeRouter);
app.use('/index', gridRouter);
app.use('/index', designRouter);
app.use('/api', loginRouter)
app.use('/message', messageRouter);
app.use(function(req, res, next) {
    next(createError(404));
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