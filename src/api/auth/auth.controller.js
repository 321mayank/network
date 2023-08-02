const UserService = require("../../models/services/users.services")
exports.signUp = async (request, response) => {
    try {
        let requestData = request.body;
        let data = await UserService.createUser(requestData);

        return response.status(HTTP_STATUS.OK).send({
            success: data.success,
            message: data.message,
            user: data.user,
        });
    } catch (error) {
        console.log("--signup--:", error);
        return response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: "INTERNAL SERVER ERROR",
        });
    }
};