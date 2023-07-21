var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var swaggerjsdoc = require('swagger-jsdoc');
var swaggerui = require('swagger-ui-express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors({ origin: '*' }))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// SWAGGER
const swaggerConfig = swaggerjsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Article Service API Documentation',
      description: 'Dokumentasi ini berkenaan dengan API - API untuk servis Article',
      version: '0.5.0',
      contact: {
        email: 'graihan@binaracademy.org',
        name: 'Ghifari',
        url: 'ghiraihan.github.io'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local Server'
      },
      {
        url: 'https://article-service.evennode.com',
        description: 'Development Server'
      }
    ]
  },
  apis: ['./routes/*.js']
})
app.use('/docs', swaggerui.serve, swaggerui.setup(swaggerConfig))

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
