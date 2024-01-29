var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
var logger = require('morgan');
require("dotenv").config()



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var colCPRouter = require('./routes/coloniasCP');
var upload = require("./routes/uploadFile");
var cliente = require("./routes/clientes");


var app = express();





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));                
app.use(cookieParser()); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())         
app.use(express.static(path.join(__dirname, 'public')));





app.use((err,req, res,next) => {
  req.set("Sec-Fetch-Mode","no-cors")
  const ip = res.socket.remoteAddress;
  const port = res.socket.remotePort;
  res.send(`Your IP address is ${ip} and your source port is ${port}.`);
  next();
})


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/coloniasCP',colCPRouter);
app.use("/uploadFile",upload)
app.use("/cliente",cliente)

var apiKeys = process.env.APIKEYS



// caDFSS
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
