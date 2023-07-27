const Sequelize = require("sequelize");

exports.getSqlConnection = () => {
  let seqInstance = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      dialect: process.env.DATABASE_DIALECT,
    }
  );
  if(process.env.DEBUG === "true") {
    seqInstance.authenticate().then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.log("Unable to connect to the database:", error);
				throw error;
      })
  }

  // seqInstance.sync({ force: false, alter: true });

  seqInstance = {
    Sequelize: Sequelize,
    seqInstance: seqInstance,
    Users : seqInstance.import("./users.model.js")
  }

  return seqInstance;


}