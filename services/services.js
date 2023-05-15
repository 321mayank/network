const db = require('../models')
const collegeUsers = db.collegeUsers;

async function requestUserdataByEmail(email) {
    const foundUser = await collegeUsers.findOne({ where: { email } });
    return foundUser;
  }

module.exports = {
    requestUserdataByEmail
}