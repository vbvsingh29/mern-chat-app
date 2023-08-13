module.exports = function (app) {

  const users = require('../controllers/user.controller')
  const express = require("express");
  const router = express.Router();

  router.post("/register", users.register);

  app.use("/users",router)


};
