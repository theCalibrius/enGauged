var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var MONGOLAB_URI = require('./database/config');
var appRoutes = require('./routes/app');
var userRoutes = require('./routes/user');
var app = express();

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(MONGOLAB_URI, options);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
  console.log('Mongodb connection open');
});

//mongoose.connect('localhost:27017/node-angular');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/user', userRoutes);
app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});

// the above code prevents 404 errors.  Whenever the app encounters a path it doesn't recognize, it redirects to the index page.  This means that you can enter router paths like localhost:3000/messages in the URL bar and hit enter, because it re-routes to index and then you're in the Angular app, and angular knows how to handle that route, because express has no knowledge of the /messages route that was set up in Angular routing.

module.exports = app;
