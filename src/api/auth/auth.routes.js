let Router = require("express").Router();
let controller = require("./auth.controller");

Router.post("/sign-up", controller.signUp);

module.exports = Router;