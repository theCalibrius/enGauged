var express = require('express');
var router = express.Router();
//var questions = require('../models/questions');

//var questionBank = new questions(JSON.stringify({name:'fluffy'}))

// runs on server port 3001 
router.get('/questionbank', function(req,res){   
	res.sendStatus(200)
/*   questionBank.save(function(err,result){
   	  if(err) console.log(err);
   	  res.sendStatus(200);
   })*/
})

module.exports = router;