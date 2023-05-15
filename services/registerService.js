const db = require('../models')
const collegeUsers = db.collegeUsers;

async function createUser(info){
    await collegeUsers.create(info)
};

module.exports = {
    createUser
}