'use strict';
const {
    Model, DataTypes
} = require('sequelize');
const $SequelizeInstance = require('../Sequelize');
const {hash} = require("bcrypt");
module.exports = (sequelize = $SequelizeInstance) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    User.init({
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        timestamps: false,
        modelName: 'User',
        defaultScope: {
            attributes: {exclude: ['password']},
        }
    });
    User.beforeCreate(async ({dataValues}) => dataValues.password = await hash(dataValues.password, Number(process.env.PASSWORD_SALD)))
    User.afterCreate((user, options) => delete user.dataValues.password);

    return User;
};
