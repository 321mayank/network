const { loginData } = require('../../validation/validation');
const { findUser } = require('../../services/loginService');
const { hashPassword } = require('../../security/hash');

async function collegeLogin(req,res,next){
    const {error , value} = loginData.body.validate(req.body)
    if(error){
        const errorMessage = error.details[0].message;
        console.lgg(errorMessage);
        res.send(errorMessage);
        return
    } else {
        const { email , password} = req.body;

        let data = await findUser(email);
        if(!data){
            console.log("user Does not exist");
        }
        else{
            const { name,passHash, salt } = data;
            const newPass = await hashPassword(password , salt);
            if(newPass === passHash){
                res.send("login Sucess");
                console.log("logged IN")

            }
            else{
                console.log(" Wrong Password")
            }


        }

    }
}

module.exports = { collegeLogin }