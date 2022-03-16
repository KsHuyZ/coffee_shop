const express = require("express");
const cookieParser = require("cookie-parser")
require("dotenv").config()
const configViewEngine = (app) => {
  app.use(cookieParser())
  app.use(express.static("./src/public"));

  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

module.exports = configViewEngine;