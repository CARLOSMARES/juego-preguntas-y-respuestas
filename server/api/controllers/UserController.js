const mongoose = require('mongoose');
const User = mongoose.model('users');

exports.ListarTodosLosUsuarios = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.ObtenerUnUsuario = async (req, res) => {
    try {
        const user = await User.findOne({ nickname: req.params.nickName });
        if (!user) {
            res.status(404).send({ message: 'Usuario no encontrado' });
        } else {
            res.json(user);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.crearUsuario = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.json(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.actualizarUsuario = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            { nickname: req.params.nickName },
            req.body,
            { new: true }
        );
        if (!user) {
            res.status(404).send({ message: 'Usuario no encontrado' });
        } else {
            res.json(user);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.eliminarUsuario = async (req, res) => {
    try {
        const result = await User.deleteOne({ nickname: req.params.nickName });
        if (result.deletedCount === 0) {
            res.status(404).send({ message: 'Usuario no encontrado' });
        } else {
            res.json({ message: 'Usuario eliminado con éxito' });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};
