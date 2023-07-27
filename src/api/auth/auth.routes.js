let Router = require("express").Router();
let controller = require("./auth.controller");

Router.get("/", controller.test);

module.exports = Router;