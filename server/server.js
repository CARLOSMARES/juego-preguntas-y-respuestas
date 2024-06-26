const express = require("express");
const { default: mongoose } = require("mongoose");
Usuarios = require('./api/models/UserModel');
Questions = require('./api/models/QuestionModel');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/juego');
var routes = require('./api/routes/routes');
routes(app);
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
.on('error', (err) => {
    console.error(err);
});