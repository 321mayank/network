const { authRoutes } = require("../api/auth");

const initialize = (app) =>{
    app.use("/api/auth", authRoutes);

};

module.exports = { initialize }