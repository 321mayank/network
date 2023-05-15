const express = require('express');

const registerCollegeUsers = express.Router()

const{
    collegeUserRegister
} = require('../../controller/college/register');

registerCollegeUsers.post('/collage-User-Register', collegeUserRegister);

module.exports = registerCollegeUsers;