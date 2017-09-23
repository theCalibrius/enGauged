var mongoose = require('mongoose');

var MONGOLAB_URI = "mongodb://admin:friend44@ds147034.mlab.com:47034/closerly"


var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

//mongodb://admin:friend44@ds147034.mlab.com:47034/closerly

mongoose.connect(MONGOLAB_URI, options);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
  console.log('Mongodb connection open');
});

module.exports = db;