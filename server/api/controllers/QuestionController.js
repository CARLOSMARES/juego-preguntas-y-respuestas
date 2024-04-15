const mongoose = require('mongoose');
const Question = mongoose.model('Questions');

exports.ListarTodasLasPreguntas = async (req, res) => {
    try {
        const questions = await Question.find({});
        res.json(questions);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.crearPregunta = async (req, res) => {
    try {
        const newQuestion = new Question(req.body);
        const question = await newQuestion.save();
        res.json(question);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.borrarPregunta = async (req, res) => {
    try {
        const question = await Question.deleteOne({ _id: req.params.questionId });
        if (question.deletedCount === 0) {
            res.status(404).send({ message: 'Pregunta no encontrada' });
        } else {
            res.json({ message: 'Pregunta eliminada con éxito' });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.actualizarPregunta = async (req, res) => {
    try {
        const question = await Question.findOneAndUpdate(
            { _id: req.params.questionId },
            req.body,
            { new: true }
        );
        if (!question) {
            res.status(404).send({ message: 'Pregunta no encontrada' });
        } else {
            res.json(question);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};
