var express = require('express');
<<<<<<< HEAD
var router = express.Router();
// var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});


module.exports = router;








//OLD CODE JUST FOR REFERENCE
// var express = require('express');
// var router = express.Router();
// var User = require('../models/user');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   User.findOne({}, function(err, data) {
//     if (err) {
//     	return res.send('Error!');
//     }
//     res.render('node', {email: data.email});
//     console.log()
//   })
// });

// router.post('/', function(req, res, next) {
// 	var email = req.body.email;
// 	var user = new User({
// 		firstName: 'Max',
// 		lastName: 'Schwarz',
// 		password: 'super-secret',
// 		email: email
// 	});
// 	user.save();
// 	res.redirect('/');
// });




// module.exports = router;
=======
var app = express.Router();
var mongoose = require('mongoose');
var User = require('../database/models/user');
var request_handler = require('../database/request_handler')

// for authentication
var path = require('path');
var http = require('http');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// main config
//var app = express();
//app.set('port', process.env.PORT || 1337);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
//app.set('view options', { layout: false });
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

//app.use(express.static(path.join(__dirname, 'public')));

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


// User.create({username: "supertopoz", first_name: "Jason", last_name: "In Korea"})
/* GET home page. */
/*app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
//
// app.use(express.static(__dirname + '/public'));

app.get('/users', request_handler.findAllUsers)



module.exports = app;
>>>>>>> eed64365ace32481de25d923ec9f92f6b561807f
