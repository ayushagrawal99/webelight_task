const { database } = require('../config/config');
const { Sequelize, DataTypes } = require('sequelize');

// Create a connection.
const sequelize = new Sequelize(
    database.dbName,
    database.username,
    database.password,
    {
        host : database.host,
        dialect : database.dialect,
        operatorsAliases : false,
        pool : {
            ...database.pool
        }
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("Database connection successfully...")
    })
    .catch((err) => {
        console.log("Error in Database connection", err)
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;

