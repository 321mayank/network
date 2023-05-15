//importing all modules and functions
const shortid = require('shortid');
const bcrypt = require('bcrypt');
const crypto = require('crypto')
const { registerData } = require('../../validation/validation');
const {hashPassword, cryptoHash} = require('../../security/hash');
const { createUser } = require('../../services/registerService');
const { requestUserdataByEmail } = require('../../services/services')
// const { error } = require('console');

//function to handle collage registration 
async function collegeUserRegister(req,res,next){
    // validationg the data
    const{ error, value} = registerData.body.validate(req.body)
    if(error){
        const errorMessage = error.details[0].message;
        console.log(errorMessage);
        res.send(errorMessage);
        return
    } else {

        // creating api key and hashing it with the crypto
        const apiKey = crypto.randomBytes(32).toString('hex')
        hashedApi = cryptoHash(apiKey)

        //getting the values for req.body
        const {collegeName, name, email, password } = req.body;

        //hashing the password and generaing salt for additional security
        const salt = await bcrypt.genSalt();
        const passHash = await hashPassword(password, salt);

        //generating user Id 
        const userID = shortid.generate()
        
        //store user data in info object 

        const info = {
            userID,
            collegeName,
            name,
            email,
            password,
            salt,
            passHash, 
            apiKey,
            hashedApi
        };

        //check if email is already exists in database
        const checkResult = await requestUserdataByEmail(email)
        if (checkResult) {
        res.send('email allready exist');
        } else {
      // Create user in database and redirect to email verification page
        await createUser(info)
        // res.redirect('/sendEmail');
        res.send("data registered ")
    }
    }

}

module.exports = {
    collegeUserRegister
}