module.exports = (sequelize, DataTypes) => {
    let Users = sequelize.define(
      "users",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        roleId: {
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING(200),
        },
        email: {
          type: DataTypes.STRING(200),
        },
        password: {
          type: DataTypes.STRING(200),
        },
      }
    );
  
    return Users;
  };
  