'use strict'
module.exports = function (app) {
    var users = require('../controllers/UserController');
    var questions = require('../controllers/QuestionController');
    app.route('/api/users')
        .get(users.ListarTodosLosUsuarios)
        .post(users.crearUsuario);
    app.route('/api/users/:nickName')
        .get(users.ObtenerUnUsuario)
        .put(users.actualizarUsuario)
        .delete(users.eliminarUsuario);
    app.route('/api/questions')
        .get(questions.ListarTodasLasPreguntas)
        .post(questions.crearPregunta);
    app.route('/api/questions/:questionId')
        .put(questions.actualizarPregunta)
        .delete(questions.borrarPregunta);
    //app.route('/api/users/:nickName/questions')
}