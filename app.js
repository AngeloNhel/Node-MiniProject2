var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginAPIRouter = require('./routes/userslogin');
var StayInTouchAPIRouter = require('./routes/usersStayInTouch');
var feedbackRouter = require('./routes/feedback');
var productsRouter = require('./routes/products');
var foodRouter = require('./routes/foods');
var athomecoffeeRouter = require('./routes/athomecoffee');
var merchRouter = require('./routes/merch');


var cors = require('cors');
var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/userslogin',loginAPIRouter);
app.use('/usersStayInTouch',StayInTouchAPIRouter);
app.use('/feedback', feedbackRouter);
app.use('/products', productsRouter);
app.use('/foods', foodRouter);
app.use('/athomecoffee', athomecoffeeRouter);
app.use('/merch', merchRouter);

// catch 404 and forward to error handler
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
