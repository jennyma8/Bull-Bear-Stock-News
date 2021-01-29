const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); //deploy
const morgan = require("morgan");
const { createUser } = require("./handlers");
const { getUser } = require("./handlers");

require("dotenv").config();
// const routes = require(".routes");
// const buildPath = path.join(__dirname, "..", "client/build");
const PORT = process.env.PORT || 8000;

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./client/build"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))
  // .use("/api", routes)
  // .use(express.static(buildPath))
  // .get("*", function (req, res) {
  //   res.sendFile(path.join(__dirname, "client/build", "index.html"));
  // })
  //login
  .get("/users", getUser)
  .post("/users", createUser)

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
