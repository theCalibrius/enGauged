var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionBankSchema = new Schema({
    questions: {type: String, required: true},
});

var Questions = mongoose.model('questionBankSchema', questionBankSchema);


module.exports = Questions