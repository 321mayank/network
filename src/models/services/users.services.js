const bcrypt = require("bcrypt");
const { gaurd } = require("../../utils");

exports.createUser = async (data) => {
    try {
        const checknumber = await DB.Users.findOne({
            where: {
                contact: data.contact,
            },
        });
        if (checknumber) {
            return {
                success: false,
                message: "Number already exists",
            };
        }

        data["password"] = bcrypt.hashSync(data["password"], 10);
        let result = await DB.Users.create(data);

        return {
            success: true,
            message: "User created successfully",
            user: result,
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
};

exports.signIn = async (data) => {
    let result = await DB.Users.findOne({
        where: {
            email: data.email,
        },
    });;
    if (result) {
        let checkPasword = await bcrypt.compare(data.password, result["password"]);
        if (!checkPasword) {
            return {
                success: false,
                message: "Password Incorrect",
                status: HTTP_STATUS.OK,
            };
        } 

        let token = gaurd.createJWT({
            id: result["id"],
            email: result["email"],

        })

        let refresh_token = gaurd.createRefreshToken({
            id: result["id"],
            email: result["email"],
        })

        return{
            success: true,
            message: "Sucessfully Logged In",
            token: token,
            refresh_token: refresh_token,
            status: HTTP_STATUS.OK,
        }
    } else {
        return{
            success: false,
            message: "Email Incorrect",
            status: HTTP_STATUS.UNAUTHORIZED,
        }
    }
    


}
