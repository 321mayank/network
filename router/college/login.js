const express = require('express');
const app = express();

const collegeLoginRoute = express.Router();

const { collegeLogin } = require('../../controller/college/login');

collegeLoginRoute.post('/collage-User-Login', collegeLogin);

module.exports = collegeLoginRoute;