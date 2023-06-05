const db = require('../models')
const collegeUsers = db.collegeUsers;

async function findUser(email){
   const found =  await collegeUsers.findOne({email})
   return found;
};

module.exports = {
    findUser
}