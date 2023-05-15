
module.exports = (sequelize, DataTypes) => {
    const collegeUsers = sequelize.define("collegeUsers", {
      
        userID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        collegeName: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        salt: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        passHash: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apiKey: {
            type: DataTypes.STRING
        },
        hashedApi: {
            type: DataTypes.STRING 
        }
     
    
    })

    return collegeUsers
}