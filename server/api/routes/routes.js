'use strict'
module.exports = function (app) {
    var users = require('../controllers/UserController');
    var questions = require('../controllers/QuestionController');
    app.route('/api/users')
        .get(users.ListarTododosLosUsuarios)
        .post(users.crearUsuario);
    app.route('/api/users/:nickName')
        .get(users.ObtenerUnUsuario)
        .put(users.actualizarUsuario)
        .delete(users.eliminarUsuario);
    app.route('/api/questions')
        .get(questions.ListarTodasLasPreguntas)
        .post(questions.crearPregunta);
    app.route('/api/questions/:questionId')
        .get(questions.ObtenerUnaPregunta)
        .put(questions.actualizarPregunta)
        .delete(questions.borrarPregunta);
    //app.route('/api/users/:nickName/questions')
}