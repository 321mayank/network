const { response } = require("express");
let jwt = require("jsonwebtoken");

module.exports.createJWT = (payload) => {
    let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
    return token;
}

module.exports.createRefreshToken = (payload) => {
    return this.createJWT(payload, process.env.JWT_REFRESH_EXPIRE);
};


exports.verifyToken = ( req, res, next) => {
    try{
        if(!req.header["authorization"]) {
        return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .send({
            success: false,
            message: "UNAUTHORIZED"
        });
    } else {
        const token = req.header.authorization.split(" ")[1];

        const verify = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verify;
    };
    } catch (error) {
        console.log(error);
        return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .send({
            success: false,
            message: "UNAUTHORIZED"
        })

    }
}


