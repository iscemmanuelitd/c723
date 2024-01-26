var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var mongo =require("./BD")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var colCPRouter = require('./routes/coloniasCP');
var upload =require("./routes/uploadFile");
var cliente = require("./routes/clientes");



var app = express();

app.use('/api', function(req, res, next){
  var key = req.params['api-key'];
  if (!key) return next(error(400, 'api key required'));
  if (apiKeys.indexOf(key) === -1) return next(error(401, 'invalid api key'))
  req.key = key;
//mongo.db("db723").ping()

  next();
});

//console.log(async()=>{return mongo.id})


var apiKeys = ['foo', 'bar', 'baz'];


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));                
app.use(cookieParser());          
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/coloniasCP',colCPRouter);
app.use("/uploadFile",upload)
app.use("/cliente",cliente)




// caDFSS
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
