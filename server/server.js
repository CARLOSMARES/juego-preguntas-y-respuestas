'use strict'
const express = require("express");
const { default: mongoose } = require("mongoose");
Usuarios = require('./models/UserModel');
Questions = require('./models/QuestionModel');
const app = express();
bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/juego');
var routes = require('./api/routes/routes');
routes(app);
port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
.on('error', (err) => {
    console.error(err);
});