module.exports = (sequelize, DataTypes) => {
    const Items = sequelize.define('items', {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            autoIncrement: true,
            primaryKey : true,
        },
        name : { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        category : { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        price : { 
            type: DataTypes.INTEGER, 
            allowNull: true,
        },
        createdAt : {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue : sequelize.fn("now"),
        },
        updatedAt : {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue : sequelize.fn("now"),
        }
    });

    return Items;
}