// const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./db/controller");
const tagsController = require("./db/tagsController");
// const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Welcome");
});

app.get("/dc_inventory", controller.getAll);
app.post("/dc_inventory/create", controller.create);
app.delete("/dc_inventory/delete/:style", controller.delete);

app.get("/dc_tags", tagsController.getAll);
app.post("/dc_tags/create", tagsController.create);
app.delete("/dc_tags/delete/:tid", tagsController.delete);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});

// module.exports = connection;
