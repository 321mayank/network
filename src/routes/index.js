const { authRoutes } = require("../api/auth");

const initialize = (app) =>{
    app.use("/", authRoutes);

};

module.exports = { initialize }