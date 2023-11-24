import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "rest_user",
    password: "rest_password",
    database: "RestaurantDB",
});


const Restaurant = sequelize.define("Restaurant", {
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    Address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    Contact_info: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

export { sequelize, Restaurant };
