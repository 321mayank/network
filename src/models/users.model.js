const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    let Users = sequelize.define(
      "users",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        roleId: {
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        contact: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
      }
    );
  
    return Users;
  };
  