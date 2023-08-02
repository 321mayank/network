let Router = require("express").Router();
let controller = require("./auth.controller");

Router.post("/sign-up", controller.signUp);
Router.post("/sign-in", controller.signIn);

module.exports = Router;