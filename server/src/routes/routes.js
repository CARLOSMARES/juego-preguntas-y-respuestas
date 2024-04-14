const express = require('express');
const app = express();
const router = express.Router();
router.use("/users", require("./user/user"));
router.use("/questions", require("./question/question"));
module.exports = router