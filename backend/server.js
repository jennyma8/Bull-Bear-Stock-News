const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { createUser } = require("./handlers");
const { getUser } = require("./handlers");

//google-translate-api
const translate = require("@vitalets/google-translate-api");

require("dotenv").config();
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

  //login
  .get("/users", getUser)
  .post("/users", createUser)

  //google-translate-api
  // .get("/speechtranslator", (req, res) => {
  //   res.render("speechtranslator", {
  //     translated: "",
  //   });
  // })

  // .post("/speechtranslator", (req, res) => {
  //   console.log(req.body.speech);

  //   translate(req.body.speech, { to: req.body.language })
  //     .then((response) => {
  //       res.json("speechtranslator", {
  //         translated: response.text,
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // })
  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
