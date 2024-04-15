const express = require('express');
const app = express();
const db = require("./config/db");
const router = express.Router();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);
router.use("/", require("./routes/routes"));
router.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => console.log(`Listening on port ${port}`));
app.on("error", (err) => console.log(err));