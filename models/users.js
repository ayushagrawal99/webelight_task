module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            autoIncrement: true,
            primaryKey : true,
        },
        first_name : { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        last_name : { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        username : { 
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true,
        },
        email : { 
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true,
        },
        password : { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        createdAt : {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue : sequelize.fn("now"),
        },
        is_admin : {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default : false,
        },
        updatedAt : {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue : sequelize.fn("now"),
        }
    });

    return Users;
}