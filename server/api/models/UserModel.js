var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Usuarios = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    rol: {
        type: String,
        required: true
    },
    gamequestions: {
        type: [
            {
                question: {
                    type: String,
                    required: true
                },
                response: {
                    type: String,
                    required: true
                }
            }
        ],
        required: true,
        default: []
    }
});

module.exports = mongoose.model('users', Usuarios);