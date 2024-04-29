// index.js
const express = require("express");
const routes = express.Router();

const users = require("./users");

module.exports = () => {
  routes.use("/api", users());
  return routes;
};
