var mongoose = require('mongoose');
var Schema = mongoose.Schema;
Questions = new Schema({
    question: {
        type: String,
        required: true
    },
    answer1: {
        type: String,
        required: true
    },
    answer2: {
        type: String,
        required: true
    },
    answer3: {
        type: String,
        required: true
    },
    answer4: {
        type: String,
        required: true
    },
    answer5: {
        type: String,
        required: true
    },
    answerCorrect: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Questions', Questions)