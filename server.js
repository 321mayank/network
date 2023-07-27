const express = require("express");
const HttpStatus = require("http-status-codes");
const bodyParser = require("body-parser");
const { DataBaseConnection }  = require("./config");
const DBconnection = DataBaseConnection.getSqlConnection();
const routes = require("./src/routes");
const cors = require("cors");
const morgan = require("morgan");

global.DB = DBconnection;
global.HTTP_STATUS = HttpStatus;

let app = express();
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(cors({ origin: "*" }));
app.use(express.static(__dirname)); // you can access image
app.use(morgan("dev"));
app.use(
	bodyParser.urlencoded({
		parameterLimit: 100000,
		limit: "50mb",
		extended: true,
	})
);
app.use(bodyParser.json());

routes.initialize(app);

app.listen(process.env.SERVER_PORT, () => {
	console.log(`APP IS STARTED AT ${process.env.SERVER_PORT}`);
});