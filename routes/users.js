// index.js
const express = require("express");
const routes = express.Router();

module.exports = () => {
  routes.get("/users", (req, res) => {
    res.send({ message: "success" });
  });
  return routes;
};
