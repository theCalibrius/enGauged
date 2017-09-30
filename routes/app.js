var express = require('express');
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
