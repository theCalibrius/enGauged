var db = require("./config");
var User = require("./models/user");
var Account = require("./models/account")

module.exports.findAllUsers = function(req, res) {
    User.find({}).exec(function(err, users) {
        res.status(200).send(users);
    });
}

module.exports.addAccount = function(req, res) {
    var newAccount = new Account({username: req.body.username, password: req.body.password}).save()
}