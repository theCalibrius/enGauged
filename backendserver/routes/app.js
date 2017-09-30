var express = require('express');
var router = express.Router();
var Questions = require('../models/questions')

router.get('/', function (req, res, next) {
    res.sendStatus(200);
});

var data = new Questions({questions:'fluffy'})

router.get('/questions', function (req, res, next) {
	Questions.findOne({},function(err, data){
		if(err) console.log('boo hoo! something went wrong!')
		res.send(data);	
	})
});

router.post('/questions', function (req, res, next) {
	data.save(function(err,result){
      if(err) console.log(res)
      res.sendStatus(200);	
	})
    
});




module.exports = router;