let path = require("path");
let NODE_ENV = process.env.NODE_ENV

require("dotenv").config({ path: path.join(process.cwd(), ".env") });

module.exports = {
    [NODE_ENV]: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_NAME,
        dialect: process.env.DATABASE_DIALECT
    }
}