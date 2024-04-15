var mongose = require('mongoose');
var User = mongose.model('users');
exports.ListarTododosLosUsuarios = function (req, res) {
    User.find(function (err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
}
exports.ObtenerUnUsuario = function (req, res) {
    User.findOne({ nickname: req.params.nickName }, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
}
exports.crearUsuario = function (req, res) {
    var newUser = new User(req.body);
    newUser.save(function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
}

exports.actualizarUsuario = function (req, res) {
    User.findOneAndUpdate({ nickname: req.params.nickName }, req.body, { new: true }, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
}

exports.eliminarUsuario = function (req, res) {
    User.remove({ nickname: req.params.nickName }, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
}