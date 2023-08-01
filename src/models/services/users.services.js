const bcrypt = require("bcrypt");

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
