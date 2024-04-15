var mongoose = require('mongoose');
var question = mongoose.model('Questions');
exports.ListarTodasLasPreguntas = function (req, res) {
    question.find(function (err, questions) {
        if (err) {
            res.send(err);
        }
        res.json(questions);
    });
}

exports.crearPregunta = function (req, res) {
    var newQuestion = new question(req.body);
    newQuestion.save(function (err, question) {
        if (err) {
            res.send(err);
        }
        res.json(question);
    })
}

exports.borrarPregunta = function (req, res) {
    question.remove({ _id: req.params.questionId }, function (err, question) {
        if (err) {
            res.send(err);
        }
        res.json(question);
    })
}

exports.actualizarPregunta = function (req, res) {
    question.findOneAndUpdate({ _id: req.params.questionId }, req.body, { new: true }, function (err, question) {
        if (err) {
            res.send(err);
        }
        res.json(question);
    })
}