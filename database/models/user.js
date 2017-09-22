var mongoose = require("mongoose");

var User = mongoose.Schema({
  username: String,
  first_name: String,
  last_name: String,

})

// User.create({username: "supertopoz", first_name: "Jason", last_name: "In Korea"})

var User = mongoose.model("User", User);

module.exports = User;